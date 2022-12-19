import Express from "express";

import { allTeams, createTeam, deleteTeam, singleTeam, updateTeam } from "../eplController/eplController.js";

export const eplRouter = Express.Router();

//router to see all regsitered teams im epl 
eplRouter.get('/teams', allTeams)

//router to get a single regsitered team in epl
eplRouter.get('/teams/:id', singleTeam)


//router to update team
eplRouter.patch('/teams/:id', updateTeam)

//router to delete team)
eplRouter.delete('/teams/:id', deleteTeam)

//create a new teaam
eplRouter.post('/teams', createTeam)