import React, { useEffect, useState } from "react";
import { Steps } from "rsuite";
import { Editor } from "@tinymce/tinymce-react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import {
  createOrder,
  getOrderAcademicLevels,
  getOrderSources,
  getOrderStyles,
  getOrderSubjects,
  getOrderTypes,
  getPages,
  getServices,
  getUrgency,
} from "../../sdk/orders/orders";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [services, setServices] = useState([]);
  const [pages, setPages] = useState([]);
  const [urgency, setUrgency] = useState([]);
  const [types, setTypes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [styles, setStyles] = useState([]);
  const [sources, setSources] = useState([]);
  const [academicLevels, setAcademicLevels] = useState([]);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState({
    order_type: null,
    order_category: null,
    academic_level: null,
    order_deadline: null,
    order_style: null,
    order_subject: null,
    order_topic: "",
    phone_number: "",
    order_references: null,
    order_pages: null,
    order_language: "",
    order_status: "",
    order_spacing: "",
    order_instructions: "",
    order_additional_information: "",
  });

  const fetchServices = async () => {
    try {
      const response = await getServices();
      if (response?.status === 200 || response?.statusCode === 200) {
        setServices(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchPages = async () => {
    try {
      const response = await getPages();
      if (response?.status === 200 || response?.statusCode === 200) {
        setPages(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchUrgency = async () => {
    try {
      const response = await getUrgency();
      if (response?.status === 200 || response?.statusCode === 200) {
        setUrgency(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchOrderTypes = async () => {
    try {
      const response = await getOrderTypes();
      if (response?.status === 200 || response?.statusCode === 200) {
        setTypes(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchOrderSubjects = async () => {
    try {
      const response = await getOrderSubjects();
      if (response?.status === 200 || response?.statusCode === 200) {
        setSubjects(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const fetchOrderStyles = async () => {
    try {
      const response = await getOrderStyles();
      if (response?.status === 200 || response?.statusCode === 200) {
        setStyles(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const fetchOrderSources = async () => {
    try {
      const response = await getOrderSources();
      if (response?.status === 200 || response?.statusCode === 200) {
        setSources(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const fetchOrderAcademicLevels = async () => {
    try {
      const response = await getOrderAcademicLevels();
      if (response?.status === 200 || response?.statusCode === 200) {
        setAcademicLevels(response?.data);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchServices();
    fetchPages();
    fetchUrgency();
    fetchOrderTypes();
    fetchOrderSubjects();
    fetchOrderStyles();
    fetchOrderAcademicLevels();
    fetchOrderSources();
  }, []);

  console.log(orderDetails);

  const handleEditorChange = (value) => {
    setOrderDetails((prev) => ({
      ...prev,
      order_instructions: value,
    }));
  };
  const handlePreviousStep = () => {
    setCurrentStep(0);
  };
  const handleNextStep = () => {
    setCurrentStep(1);
  };
  const handleNextAttachmentStep = () => {
    setCurrentStep(2);
  };
  const handlePreviousInstructionsStep = () => {
    setCurrentStep(1);
  };
  const handlePreviousAttachmentStep = () => {
    setCurrentStep(2);
  };

  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleCreateOrder = async () => {
    try {
      if (!auth?.user) {
        toast.error("Log in to create an order");
      } else {
        const response = await createOrder({
          order_type: Number(orderDetails.order_type),
          order_category: Number(orderDetails.order_category),
          academic_level: Number(orderDetails.academic_level),
          order_deadline: Number(orderDetails.order_deadline),
          order_style: Number(orderDetails.order_style),
          order_subject: Number(orderDetails.order_subject),
          order_topic: orderDetails.order_topic,
          phone_number: orderDetails.phone_number,
          order_references: Number(orderDetails.order_references),
          order_pages: Number(orderDetails.order_pages),
          order_language: orderDetails.order_language,
          order_status: "Active",
          order_spacing: orderDetails.order_spacing,
          order_instructions: orderDetails.order_instructions,
          order_additional_information:
            orderDetails.order_additional_information,
          user: auth?.user?.userId,
          order_amount: "24.00",
        });
        if (response.status === 201 || response.statusCode === 201) {
          console.log(response);
          toast.success("Order created successfully");
          navigate("/dashboard/all-orders");
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleNextReviewStep = () => {
    setCurrentStep(3);
  };

  const handleCreateNewOrder = () => {
    handleCreateOrder();
  };

  return (
    <div className="h-[700px]">
      <div>
        <p className="mb-[10px] font-bold text-[16px]">Create Order</p>
      </div>
      <div className="flex h-[95%] border-2 shadow-md">
        <div className="w-[20%] h-full border-r-2 p-[10px]">
          <Steps current={currentStep} vertical small>
            <Steps.Item title="Order Requirements" />
            <Steps.Item title="Instructions" />
            <Steps.Item title="Attachments and files" />
            <Steps.Item title="Review and complete" />
          </Steps>
        </div>
        {currentStep === 0 && (
          <div className="w-[80%] p-[20px] h-full">
            <p className="mb-[20px] text-[16px] font-bold">
              Enter order details
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-[20px] w-full">
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Service</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_type}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_type: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select order service" />
                      {services &&
                        services.map((service) => (
                          <option
                            key={service?.order_type_id}
                            value={service?.order_type_id}
                          >
                            {service?.order_type_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="deadline">Urgency</label>
                    <select
                      name="deadline"
                      id="deadline"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_deadline}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_deadline: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Choose order deadline" />
                      {urgency &&
                        urgency.map((item) => (
                          <option
                            key={item?.urgency_id}
                            value={item?.urgency_id}
                          >
                            {item?.order_urgency_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Spacing</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_spacing}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_spacing: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select order spacing" />
                      <option value="single">Single</option>
                      <option value="double">Double</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-[20px] w-full">
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Type of paper</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_category}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_category: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select the type of paper" />
                      {types &&
                        types.map((type) => (
                          <option key={type?.id} value={type?.id}>
                            {type?.order_category_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Style</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_style}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_style: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select order style" />
                      {styles &&
                        styles.map((style) => (
                          <option key={style?.style_id} value={style?.style_id}>
                            ({style?.style_code}) {style?.style_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Language</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_language}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_language: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select order language" />
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-[20px] w-full">
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Level</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.academic_level}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          academic_level: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select academic level" />
                      {academicLevels &&
                        academicLevels.map((level) => (
                          <option
                            key={level?.academic_level_id}
                            value={level?.academic_level_id}
                          >
                            {level?.academic_level_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Sources</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_references}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_references: e.target.value,
                        }))
                      }
                    >
                      <option
                        value=""
                        label="Select the number of references"
                      />
                      {sources &&
                        sources.map((source) => (
                          <option
                            key={source?.reference_id}
                            value={source?.reference_id}
                          >
                            {source?.reference_description}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Pages</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_pages}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_pages: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select the number of pages" />
                      {pages &&
                        pages.map((page) => (
                          <option key={page?.pages_id} value={page?.pages_id}>
                            {page?.pages_description}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-[20px] w-full">
                  <div className="flex flex-col gap-[5px] w-[30%]">
                    <label htmlFor="service">Subject</label>
                    <select
                      name="service"
                      id="service"
                      className="border-2 h-[45px] focus:outline-none px-[10px] w-full"
                      value={orderDetails.order_subject}
                      onChange={(e) =>
                        setOrderDetails((prev) => ({
                          ...prev,
                          order_subject: e.target.value,
                        }))
                      }
                    >
                      <option value="" label="Select order subject" />
                      {subjects &&
                        subjects.map((subject) => (
                          <option
                            key={subject?.order_subject_id}
                            value={subject?.order_subject_id}
                          >
                            {subject?.order_subject_name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={handleNextStep}
                  className="bg-[#FFA502] h-[45px] px-[20px] w-[120px]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <div className="w-[80%] border-2 p-[20px] h-full">
            <p className="text-[16px] font-bold mb-[20px]">Instructions</p>
            <div className="w-full flex flex-col gap-[5px] mb-[20px]">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone muber"
                className="h-[45px] focus:outline-none w-full border-2 px-[20px]"
                value={orderDetails.phone_number}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    phone_number: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-full flex flex-col gap-[5px] mb-[20px]">
              <label htmlFor="phone">Topic</label>
              <input
                type="text"
                placeholder="Enter your order topic"
                className="h-[45px] focus:outline-none w-full border-2 px-[20px]"
                value={orderDetails.order_topic}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    order_topic: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-full flex flex-col gap-[5px] mb-[20px]">
              <label htmlFor="phone">Instructions</label>
              <Editor
                apiKey="jm5weuex99fz17qyiv457ia53e6ignpzdupkd8vpszcywnoo"
                value={orderDetails.order_instructions}
                initialValue=""
                init={{
                  height: 300,
                  language: "en_US",
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "link | undo redo | formatselect | bold italic | \
                                                    alignleft aligncenter alignright | \
                                                    bullist numlist outdent indent | help",
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
            <div className="flex items-center gap-[20px]">
              <button
                onClick={handlePreviousStep}
                className="bg-[#0177D5] text-white h-[45px] px-[20px] w-[120px]"
              >
                Previous
              </button>
              <button
                onClick={handleNextAttachmentStep}
                className="bg-[#FFA502] h-[45px] px-[20px] w-[120px]"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="w-[80%] border-2 shadow-md p-[20px] h-full">
            <p className="text-[16px] font-bold mb-[20px]">
              Attachments and files
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <div>
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                  >
                    {fileList.length < 5 && "+ Upload"}
                  </Upload>
                </ImgCrop>
              </div>
              <div className="flex items-center gap-[20px]">
                <button
                  onClick={handlePreviousInstructionsStep}
                  className="bg-[#0177D5] text-white h-[45px] px-[20px] w-[120px]"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextReviewStep}
                  className="bg-[#FFA502] h-[45px] px-[20px] w-[120px]"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="w-[80%] border-2 p-[20px] h-full">
            <p className="font-bold text-[16px] mb-[20px]">
              Add additional information
            </p>
            <div className="h-[90%] flex flex-col justify-between">
              <div className="flex flex-col gap-[5px]">
                <p>Additional sources and citations</p>
                <textarea
                  name="sources"
                  id="sources"
                  cols="30"
                  rows="10"
                  className="border-2 w-full focus:outline-none"
                  value={orderDetails.order_additional_information}
                  onChange={(e) =>
                    setOrderDetails((prev) => ({
                      ...prev,
                      order_additional_information: e.target.value,
                    }))
                  }
                ></textarea>
              </div>
              <div className="flex items-center gap-[20px]">
                <button
                  onClick={handlePreviousAttachmentStep}
                  className="bg-[#0177D5] text-white h-[45px] px-[20px] w-[120px]"
                >
                  Previous
                </button>
                <button
                  onClick={handleCreateNewOrder}
                  className="bg-[#FFA502] h-[45px] px-[20px]"
                >
                  Create Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateOrder;
