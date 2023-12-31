import Assignments from "@components/Student/Assignments";

export const metadata = {
  title:
    "Student Assignments - Online Courses & Education Bootstrap5 Template",
  description: "Student Assignments Page Description",
  icons: {
    icon: ["/favicon.ico"],
  },
};

const page = () => {
  return (
    <>
      <Assignments />
    </>
  );
};

export default page;
