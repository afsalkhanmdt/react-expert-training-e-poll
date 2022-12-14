import { Request, Response } from "express";
import { getAdminById } from "../../../Model/Admin";
import { createElection } from "../../../Model/Eelection";
import { badRequest, successResponse } from "../../../Utils";
import { RequestWithAuth } from "../../../Types/Request";

const CreateElection = async (req: RequestWithAuth, res: Response) => {
  const college = (await getAdminById(req.user.id)).college;
  const election = await createElection({ ...req.body, college });
  successResponse(res, election, "Create Election");
};

export default CreateElection;
