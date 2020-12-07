import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there change 4!!!!");
});

export { router as currentUserRouter };
