const router = require("express").Router();
const {
  getThoughts,
  getThoughtById,
  postThought,
  addReaction,
  updateThought,
  deleteThought,
  removeReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(postThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
