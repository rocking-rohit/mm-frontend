import axios from "axios";

export const newFunc = () => {
  return {
    name: "rohit",
    age: 23,
  };
};

export const apidata = async () => {
  return {
    urls: ["net-training", "adobe-cq5-training"],
  };
};

export const formSubmit = async () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve("Submitted");
    }, 3000);
  });
};

export const getTrendingCourses = async () => {
  try {
    const courses = await axios.get(
      `${process.env.BACKEND_URL}/dev/course/trending`
    );
    return new Promise((resolve, reject) => {
      return resolve(courses.data.data.courses);
    });
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};

export const getPopularCategories = async () => {
  try {
    const cats = await axios.post(
      `${process.env.BACKEND_URL}/dev/category/popular-cats`
    );

    if (cats.data.success) {
      return new Promise((resolve, reject) => {
        return resolve(cats.data.data);
      });
    } else {
      // console.log(courses);
      throw "Some error";
    }
  } catch (err) {
    console.log(err);
    return new Promise((resolve, reject) => {
      return resolve("Some error Occoured");
    });
  }
};
