import React, { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Add = () => {

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs")
  };

  return (
    <div name="add" className="flex justify-center">
      <div name="container" className="w-[600] p-9 md:w-[1400px] overflow-hidden ">
        <h1 className="font-amaze w-full font-semibold text-[22px] ">Add New Gig</h1>
        <div name="sections" className="flex flex-col gap-10 md:gap-24">
          <div name="info" className="flex flex-col gap-3">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Type here..."
             className="p-2 bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] "
             onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" className="p-5 bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" onChange={handleChange}>
              <option>Select the Category</option>
              <option value="photography">Photography</option>
              <option value="interiordesign">Interior Design</option>
              <option value="logodesign">Logo Design</option>
              <option value="dataentry">Data Entry</option>
              <option value="socialmarketing">Social Marketing</option>
              <option value="videoediting">Video Editing</option>
              <option value="voiceover">Voiceover</option>
              <option value="webdevelopment">Web development</option>
            </select>
            <div name="images" className="flex flex-col justify-between bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]">
              <div name="imagesInputs" className="flex flex-col p-3">
                  <div className="flex flex-col">
                      <label htmlFor="" className="p-2">Cover Image</label>
                      <input type="file" onChange={(e) => setSingleFile(e.target.files[0])} className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" />
                  </div>
                  <div className="flex flex-col md:flex-col">
                      <label htmlFor="" className="p-2">Upload Images</label>
                      <input type="file" onChange={(e) => setFiles(e.target.files)} multiple className="rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" />
                  </div>
              </div>
              <div className="flex justify-center pb-3">
                <button className="p-3 font-amaze font-medium bg-[#0F1035] text-white hover:bg-[#365486] rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] w-[270px]"  onClick={handleUpload}> {uploading ? "uploading" : "Upload"}</button>
              </div>
          </div>

            <label htmlFor="">Description</label>
            <textarea name="desc" 
            id="" 
            placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16" className="p-2 bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]"
            onChange={handleChange}/>
          </div>
          <div name="details" className=" flex flex-col gap-3">
            <label htmlFor="">Service Title</label>
            <input name="shortTitle" type="text" onChange={handleChange} placeholder="e.g. web design"  className="bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-2"/>
            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" id=""  onChange={handleChange} placeholder="Short description of your service" cols="30" rows="10" className="bg-gray-200  rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number"  name="deliveryTime" onChange={handleChange} className="bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]"/>
            <label htmlFor="">Revision Number</label>
            <input type="number"  name="revisionNumber" onChange={handleChange}className="bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" />
            <label htmlFor="">Add Features</label>
            <form action=""  className="flex justify-between" onSubmit={handleFeature}>
            <input type="text" placeholder="e.g. page design" className="bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1 w-3/4"/>
            <button className="p-3 font-amaze font-medium bg-[#0F1035] text-white  hover:bg-[#365486]  rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" type="submit">add</button>
            </form>
            <div name="addedFeatures" className="flex gap-2">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button className="h-[25px] font-medium text-[15px] bg-transparent text-black border-solid-black border-2 flex items-center gap-3"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
                 ))}
                 </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" onChange={handleChange} className="bg-gray-200 rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px] p-1" />
          </div>
          <button className="p-5 font-amaze font-medium bg-[#0F1035] text-white  hover:bg-[#365486]  rounded-lg focus:border-blue-400 focus:outline-none border-white border-[1px]" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default Add;