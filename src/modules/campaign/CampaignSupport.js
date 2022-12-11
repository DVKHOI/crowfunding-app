import { Button } from "components/button";
import { Input } from "components/input";
import React from "react";
import { useForm } from "react-hook-form";

const CampaignSupport = () => {
  const { control } = useForm();
  return (
    <div>
      <h2 className="p-3 text-xl font-semibold">Support</h2>
      <div className="flex flex-col justify-center w-full px-6 py-5 bg-white rounded-lg shadow-1">
        <h3 className="mb-8 text-xl font-medium text-center text-text3">
          Pledge without reward
        </h3>
        <Input
          placeholder="$10"
          control={control}
          name="name"
          className="px-5 py-3 text-lg font-medium text-text4"
        ></Input>
        <div className="p-5 rounded-lg bg-[#F7F7F7] my-5">
          <h4 className="mb-5 text-sm font-semibold text-text2">
            Back it because you believe in it.
          </h4>
          <p className="text-sm font-normal text-text3">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary" className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
