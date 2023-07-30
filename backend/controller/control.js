const Students = require("../models/students");
const axios =  require('axios')

//create a new workout
// const createworkout = async (req, res) => {
//   const { title, load, reps } = req.body;
//   //add a document to db
//   try {
//     const workout = await Workout.create({ title, load, reps });
//     res.status(200).json(workout);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

//get a single workout
// const getstudent = async (req, res) => {
//   const { id } = req.params;
//   const workout = await Workout.findById(id);
//   if (!workout) {
//     return res.status(404).json({ error: "no such workout" });
//   }
//   res.status(200).json(workout);
// };

//get all workouts

const getstudents = async (req, res) => {
  try {
    const students = await Students.find({}).sort({ createdAt: -1 });

    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found.' });
    }

    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = getstudents;


//delete a workout
// const deleteworkout = async (req, res) => {
//   const { id } = req.params;
//   const workout = await Workout.findOneAndDelete({ _id: id });

//   res.status(200).json(workout);
// };

const singlesms = async (req, res) => {
  const { sender, phone, message } = req.body;
  const key = "d97868cc69d36af20e76";
  const apiBaseUrl = 'http://sms.smsnotifygh.com';
  try {
    const apiUrl = `${apiBaseUrl}/smsapi?key=${key}&to=${phone}&msg=${message}&sender_id=${sender}`;
    const send = await axios.post(apiUrl);
    const result = send.data;
    console.log(result);
    
    if (send.status === 200 || result === "1000") {
      console.log("Message sent");
      res.send("Message sent");
    } else {
      console.log("Error sending SMS");
      res.status(500).send("Error sending SMS");
    }
  } catch (error) {
    console.error("Error sending SMS:", error.message);
    res.status(500).send("Error sending SMS");
  }
};




module.exports = {
  getstudents,
  singlesms
};
