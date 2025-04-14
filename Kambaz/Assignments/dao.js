import model from "./model.js";

export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  delete assignment._id;
  model.create(assignment);
  return model.findOne({ title: assignment.title, course: assignment.course });
}

export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  delete assignmentUpdates._id;
  await model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  return model.findById(assignmentId);
}
