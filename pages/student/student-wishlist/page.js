import Wishlist from "@components/Student/Wishlist";

export const metadata = {
  title:
    "Student Wishlist Course - Online Courses & Education Bootstrap5 Template",
  description: "Student Wishlist Course Page Description",
  icons: {
    icon: ["/favicon.ico"],
  },
};

const page = () => {
  return (
    <>
      <Wishlist />
    </>
  );
};

export default page;
