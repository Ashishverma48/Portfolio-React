import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

function ContactUs() {
  return (
    <section>
      <div className=" bg-cover relative bg-[url('src/assets/gredient.png')] bg-center w-full  mt-10   ">
        <h1
          data-aos="fade-up"
          className="md:text-[45px]  text-3xl  mb-3   text-black font-bold"
        >
          Contact <span className="text-secondary ">Us</span>
        </h1>
        <p className="font-semibold text-xl mb-2">
          Let's get in touch and build something together 💻
        </p>
        <div className=" w-full h-full md:py-10 flex flex-col md:flex-row gap-10 md:px-12 px-4 ">
          <div className="md:w-2/6 w-full  ">
            <div className=" p-4 mb-5 bg-violet-700 rounded-md bg-opacity-20 backdrop-blur-xl drop-shadow-xl  shadow-lg hover:shadow-sm duration-200">
              <div className="flex gap-2 text-secondary">
                <LocationOnIcon />
                <p className="uppercase font-semibold mb-3 ">Location </p>
              </div>

              <div className="text-[14px] mt-1">
                <p className="font-semibold">Noida Upper Pradesh</p>
              </div>
            </div>
            <div className=" p-4  bg-violet-700 rounded-md bg-opacity-20 backdrop-blur-xl drop-shadow-xl  shadow-lg hover:shadow-sm duration-200">
              <div className="flex gap-3 font-semibold text-secondary">
                <ForwardToInboxIcon />
                <p>E-MAIL</p>
              </div>
              <p className="mt-3">abcdefd@gmail.com</p>
            </div>
            <div className=" p-4 mt-5  bg-violet-700 rounded-md bg-opacity-20 backdrop-blur-xl drop-shadow-xl  shadow-lg hover:shadow-sm duration-200">
              <div className="flex gap-3 font-semibold text-secondary">
                <PhoneIcon />
                <p>CONTACT</p>
              </div>
              <p className="mt-3">+91 7637873776</p>
            </div>
          </div>
          <div className="md:w-4/6 w-full p-5  bg-violet-300 bg-opacity-20 rounded-lg md:p-7 shadow-lg">
            <div className="w-full flex flex-wrap  md:flex-nowrap md:gap-8 mt-3 ">
              <div className="flex items-end gap-2 md:w-1/2 w-full ">
                <PersonIcon color="primary" />
                <TextField
                  id="standard-basic"
                  label="Full Name"
                  variant="standard"
                  fullWidth
                />
              </div>
              <div className="flex items-end gap-3 md:w-1/2 w-full mt-4 mt:mt-0">
                <PhoneIcon color="primary" />
                <TextField
                  id="standard-basic"
                  label="Phone"
                  fullWidth
                  variant="standard"
                />
              </div>
            </div>
            <div className="flex items-end gap-2 mt-3">
              <ForwardToInboxIcon color="primary" />
              <TextField
                id="standard-basic"
                label="Email"
                fullWidth
                variant="standard"
              />
            </div>
            <div className="mt-3 flex gap-3 items-end">
              <CommentIcon color="primary" />
              <TextField
                multiline
                rows={3}
                label="Message"
                variant="standard"
                fullWidth
              />
            </div>
            <div className="mt-7  ">
              <Button variant="contained" endIcon={<SendIcon />}>
                GET A FREE QUOTE!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
