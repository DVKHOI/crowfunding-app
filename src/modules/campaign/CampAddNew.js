import startCamp from "../../images/startCamp.png";
import React, { useMemo, useState } from "react";
import FormRow from "components/common/FormRow";
import FormGroup from "components/common/FormGroup";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input, Textarea } from "components/input";
import { Dropdown } from "components/dropdown";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { Button } from "components/button";
Quill.register("modules/imageUploader", ImageUploader);

const CampAddNew = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = useState("");
  const handleAddNewCamp = (values) => {
    console.log(values);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFromData = new FormData();
          // bodyFromData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: "https://api.imgbb.com/1/upload?key=4bb6d43216f3a1e39a2b5d82fa69eeb1",
          //   data: bodyFromData,
          //   headers: {
          //     "Content-Type": "mutipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="bg-white py-10 px-[66px] rounded-xl">
      <div className="mb-10 text-center">
        <h1 className="inline-flex gap-x-2 px-[59px] py-4 bg-text4 text-text2 bg-opacity-5 font-bold text-[25px] rounded-xl ">
          Start a Campaign <img src={startCamp} alt="" />
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCamp)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a category *</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Crypto</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor="description">Short Description *</Label>
          <div>
            <Textarea
              control={control}
              name="description"
              placeholder="Write a short description...."
            ></Textarea>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>
        <div className="flex w-full mb-10 rounded-lg bg-secondary">
          <div className="flex items-center justify-start px-12 py-8 gap-x-5">
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2263_14615)">
                  <path
                    d="M26.4997 9.979H13.1663C12.6663 9.979 12.333 10.3123 12.333 10.8123C12.333 11.3123 12.6663 11.6457 13.1663 11.6457H26.4997C26.9997 11.6457 27.333 11.3123 27.333 10.8123C27.333 10.3123 26.9997 9.979 26.4997 9.979Z"
                    fill="white"
                  />
                  <path
                    d="M12.4999 7.81266C12.4999 8.146 12.8332 8.31266 13.1666 8.31266H26.4999C26.8332 8.31266 27.1666 8.146 27.1666 7.81266L30.4999 1.146C30.6666 0.812663 30.6666 0.479329 30.3332 0.145996C30.1666 -0.0206706 29.8332 -0.0206706 29.4999 0.145996L23.3332 3.146L20.4999 0.312663C20.1666 -0.0206706 19.6666 -0.0206706 19.3332 0.312663L16.3332 3.146L10.1666 0.145996C9.83324 -0.0206706 9.4999 -0.0206706 9.16657 0.145996C8.83324 0.312663 8.9999 0.812663 9.16657 1.146L12.4999 7.81266Z"
                    fill="white"
                  />
                  <path
                    d="M27.1667 13.6456C27 13.4789 26.6667 13.3123 26.5 13.3123H13.1667C13 13.3123 12.6667 13.4789 12.5 13.6456C12.1667 13.9789 4 22.6456 4 27.4789C4 34.3123 11.1667 39.9789 19.8333 39.9789C28.5 39.9789 35.6667 34.3123 35.6667 27.4789C35.6667 22.6456 27.5 13.9789 27.1667 13.6456ZM20.6667 33.3123V34.1456C20.6667 34.6456 20.3333 34.9789 19.8333 34.9789C19.3333 34.9789 19 34.6456 19 34.1456V33.3123C17.1667 32.9789 15.8333 31.8123 15.6667 30.3123C15.6667 29.8123 16 29.4789 16.5 29.4789C17 29.4789 17.3333 29.8123 17.3333 30.3123C17.3333 30.9789 18.1667 31.6456 19 31.8123V28.4789C16.8333 27.9789 15.6667 26.8123 15.6667 25.3123C15.6667 23.6456 17.1667 22.3123 19 21.9789V21.1456C19 20.6456 19.3333 20.3123 19.8333 20.3123C20.3333 20.3123 20.6667 20.6456 20.6667 21.1456V21.6456C22.5 21.9789 23.8333 23.1456 24 24.6456C24 25.1456 23.6667 25.4789 23.1667 25.4789C22.6667 25.4789 22.3333 25.1456 22.3333 24.6456C22.3333 23.9789 21.5 23.3123 20.6667 23.1456V26.4789C22.8333 26.9789 24 28.1456 24 29.6456C24 31.6456 22.5 32.9789 20.6667 33.3123Z"
                    fill="white"
                  />
                  <path
                    d="M20.667 28.4785V31.4785C21.667 31.3119 22.3337 30.6452 22.3337 29.9785C22.3337 29.3119 21.8337 28.8118 20.667 28.4785Z"
                    fill="white"
                  />
                  <path
                    d="M17.333 24.9788C17.333 25.6454 17.833 26.1454 18.9997 26.4788V23.4788C17.9997 23.6454 17.333 24.3121 17.333 24.9788Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2263_14615">
                    <rect
                      width="39.6667"
                      height="39.9579"
                      fill="white"
                      transform="translate(0 0.0209961)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <h3 className="text-[25px] font-bold leading-[38px] text-white">
              You will get 90% of total raised
            </h3>
          </div>
        </div>
        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              control={control}
              name="goal"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount">Raised Amount *</Label>
            <Input
              control={control}
              name="amount"
              placeholder="Write a titel"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input
              control={control}
              name="prefilled"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="text-sm font-normal text-text3">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input control={control} name="video" placeholder="Video"></Input>
            <p className="text-sm font-normal text-text3">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label>Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Crypto</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label>Counrty</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select country"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Crypto</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
                <Dropdown.Option>Crypto</Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow className="mb-4">
          <FormGroup>
            <Label htmlFor="start_date">Start Date</Label>
            <Input
              control={control}
              name="start_date"
              placeholder="Start Date"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="end_date">End Date</Label>
            <Input
              control={control}
              name="end_date"
              placeholder="End Date"
            ></Input>
          </FormGroup>
        </FormRow>
        <Button type="submit" kind="primary" className="px-10 mx-auto">
          Submit new campaign
        </Button>
      </form>
    </div>
  );
};

export default CampAddNew;
