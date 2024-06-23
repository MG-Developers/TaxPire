import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { RxCross1 } from "react-icons/rx";

function PlanCategory() {
  const [features, setFeatures] = useState([{ id: 1 }]);

  const handleAddFeature = () => {
    const newFeatureId = features[features.length - 1].id + 1;
    setFeatures([...features, { id: newFeatureId }]);
  };

  const handleRemoveFeature = (id) => {
    if (features.length > 1) {
      const updatedFeatures = features.filter((feature) => feature.id !== id);
      setFeatures(updatedFeatures);
    } else {
      alert("There Should be atleast 1 feature.");
    }
  };

  return (
    <section className="py-12">
      <div className="mx-auto w-3/4">
        <div className="mb-6">
          <p className="text-4xl font-medium">Plan Category Form -</p>
        </div>

        <div className="grid gap-10 mb-10">
          <div className="grid grid-cols-2 gap-x-10">
            <div>
              <Input
                isRequired
                type="text"
                variant="bordered"
                label="Category Short Form"
              />
            </div>

            <div>
              <Input
                isRequired
                type="text"
                variant="bordered"
                label="Category Name"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xl font-normal">All Features in this Category :</p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          {features.map((feature, index) => {
            return (
              <div key={feature.id} className="flex items-center">
                <Input
                  isRequired
                  type="text"
                  variant="bordered"
                  label={`Feature ${index + 1}`}
                />

                <button
                  onClick={() => handleRemoveFeature(feature.id)}
                  className="flex items-center justify-center ml-2 bg-red-500 text-white p-2 h-min rounded-full"
                >
                  <RxCross1 size="1.4rem" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <button
            onClick={() => handleAddFeature()}
            className="flex bg-green-500 p-4 text-white font-bold rounded-xl"
          >
            Add More
          </button>
        </div>

        <div className="grid grid-cols-2 mt-10 gap-10">
          <button
            type="submit"
            className="flex items-center justify-center bg-tp-sky-blue text-base text-white px-8 py-4 font-bold rounded-xl transition-all hover:bg-tp-blue hover:ease-in-out hover:duration-500"
          >
            Submit
          </button>

          <button
            type="reset"
            className="flex items-center justify-center bg-red-500 text-base text-white px-8 py-4 font-bold rounded-xl transition-all hover:bg-red-700 hover:ease-in-out hover:duration-500"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default PlanCategory;
