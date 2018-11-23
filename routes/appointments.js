const mongoose = require("mongoose");
const Appointment = require("../models/appointment");

module.exports = app => {
  app.get("/appointments", (req, res) => {
    Appointment.find((err, appointments) => {
      if (err) {
        throw err;
      }
      if (appointments === null) {
        res.status(404).json({ message: "Appointments' list was not found" });
      }
      res.status(200).json(appointments);
    });
  });

  app.post("/appointments", (req, res) => {
    var newAppointment = new Appointment(req.body);
    newAppointment.save((err, savedAppointment) => {
      if (err) {
        if (err.name === "ValidationError") {
          res.status(422).json(err);
        } else {
          res.status(400).send(err);
        }
        return;
      }
      res.set("Location", "/appointments/" + savedAppointment.id);
      res.status(200).json(savedAppointment);
    });
  });

  app.put("/appointments/:id", (req, res) => {
    const id = req.params.id;
    Appointment.findById(id, (err, appointment) => {
      if (err) {
        throw err;
      }
      if (appointment == null) {
        res.status(404).json({ message: "Appointment wasn't found" });
      } else {
        appointment.set(req.body);
        appointment.save((error, updatedAppointment) => {
          if (error) {
            if (error.name === "ValidationError") {
              res.status(422).send(error);
            } else {
              res.status(400).send(error);
            }
            return;
          }
          res.status(200).json(updatedAppointment);
        });
      }
    });
  });

  app.delete("/appointments/:id", (req, res) => {
    const id = req.params.id;
    Appointment.findById(id, (err, appointment) => {
      if (err) {
        throw err;
      }
      if (appointment == null) {
        res.status(404).json({ message: "Appointment wasn't found" });
      } else {
        appointment.remove(err => {
          if (err) {
            res.status(400).send(err);
            return;
          }
          res.status(200).json(appointment);
        });
      }
    });
  });
};
