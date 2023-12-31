import EnrolledCourses from "@components/Student/Eenrolled-Course";

export const metadata = {
  title:
    "Student Enrolled Course - Online Courses & Education Bootstrap5 Template",
  description: "Student Enrolled Course Page Description",
  icons: {
    icon: ["/favicon.ico"],
  },
};

const page = () => {
  return (
    <>
      <EnrolledCourses />
    </>
  );
};

export default page;
