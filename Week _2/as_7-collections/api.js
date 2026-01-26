// HANDS-ON 5
// ----------
// Test data:
const apiResponse = {
  status: "success",
  data: [
    { id: 1, title: "JS Basics", price: 999, published: true },
    { id: 2, title: "React", price: 1499, published: false },
    { id: 3, title: "Node", price: 1299, published: true }
  ]
};


// Operations:
//  1. Extract only the data array (destructuring)
const { data } = apiResponse;
console.log(data);

//  2. Get only published courses
const publishedCourses = data.filter(course => course.published);
console.log(publishedCourses);

//  3. Sort courses by price (high → low)
const sortedByPrice = [...data].sort((a, b) => b.price - a.price);
console.log(sortedByPrice);

//  4. Create a list of course titles
const courseTitles = data.map(course => course.title);
console.log(courseTitles);

//  5. Calculate total price of published courses
const totalPublishedPrice = publishedCourses.reduce((sum, course) => sum + course.price, 0);
console.log(totalPublishedPrice);
