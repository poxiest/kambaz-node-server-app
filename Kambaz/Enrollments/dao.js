import model from "./model.js";

export async function findCoursesForUser(userId) {
  console.log("Reached here")
  const enrollments = await model.find({ user: userId }).populate("course");
  console.log("PLS")
  console.log(enrollments.length);

  console.log(enrollments)
  return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}

export function unenrollUserFromCourse(user, course) {
  return model.deleteOne({ user, course });
}

export function deleteCourse(courseId) {
  return model.deleteMany({ course: courseId });
}