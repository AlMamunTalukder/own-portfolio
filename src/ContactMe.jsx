import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qy37urq",
        "template_jgak3f8",
        form.current,
        "hYHFNWwDDEM1kwFWE"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Email Sent Successfully",
            text: "We will get back to you soon!",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Error Sending Email",
            text: "Please try again later.",
          });
        }
      );
  };
  return (
    <section className="py-6 text-gray-50 text-left bg-black bg-opacity-20 rounded-lg">
      <h1 className="text-4xl font-bold text-center underline">
        Contact with Me
      </h1>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:mt-28 lg:mt-28 md:py-0 md:px-6 ml-10 ">
          {/* <h1 className="text-4xl font-bold ">Address</h1> */}
          {/* <p className="pt-2 pb-4">Fill in the form to start a conversation</p> */}
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Arambag, Motijheel, Dhaka, Bangladesh.</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+8801862439094</span>
            </p>
            <a
              className="flex items-center"
              href="https://wa.me/qr/MTJDVYESOQBQI1"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2 sm:mr-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              <span>+8801879602662</span>
            </a>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>almamuntalukder0@gmail.com</span>
            </p>
          </div>
        </div>
        <form
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 mt-6"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="block">
            <span className="mb-1">Name</span>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="block w-full rounded-md shadow-sm focus:ring h-10 text-black bg-white pl-2"
            />
          </label>
          <label className="block">
            <span className="mb-1 ">Email</span>
            <input
              type="email"
              name="from_email"
              placeholder="youremail@email.com"
              className="block w-full rounded-md  shadow-sm focus:ring h-10 pl-2 text-black bg-white"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              name="message"
              className="block w-full textarea textarea-bordered  rounded-md focus:ring focus:ri focus:ri bg-white text-black"
            ></textarea>
          </label>
          <button
            type="submit"
            className="self-center px-8 text-lg focus:ring hover:ring focus:ri   rounded-full   text-gray-900 focus:ri hover:ri btn btn-outline btn-success "
          >
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
