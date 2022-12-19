import express from "express";

import { eplModel } from "../eplModel/eplModel.js";

//logic to get all teams registered in the league
export const allTeams = async (req, res) => {
    try {
        const teamsRegistered = await eplModel.findAll()
        if(teamsRegistered.length === 0) {
            res.status(404).json({
                message: "NO SINGLE RECORD IN THE DATABASE"
            })
        } else {
            res.status(200).json({
                message: "ALL REGISTERED TEAMS IN ENGLISH PREMIER LEAGUE",
                data: teamsRegistered
            })
        }
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
};

// get a single registered team
export const singleTeam = async (req, res )=> {
    try {
        // let id =req.params.id;
        // const aTeam = await eplModel.findAll({
        //     where: {
        //         id: id
        //     }
        // });
        // if (aTeam.length === 0) {
        //     res.status(404).json({
        //         message: "TEAM WITH ID: " + id + "NOT FOUND"
        //     })
        // } else {
        //     res.status(200).json({
        //         message: "Displaying team with ID: " + id,
        //         data: aTeam[0]
        //     })
        // }
        let id = req.params.id
        const aTeam = await eplModel.findAll({
            where: {
                id: id
            }
        });
        if (aTeam.length === 0) {
            res.status(404).json({
                message: "TEAM WITH ID: " + id + " NOT FOUND"
            })
        } else {
            res.status(200).json({
                message: "TEAM WITH ID: " + id + " DISPLAYING",
                data: aTeam
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//logic to update an existing data
export const updateTeam = async (req, res) => {
    try {
        let body = req.body;
        let numberOfPlayersConstraints = req.body.numberOfPlayers
        // console.log(numberOfPlayersConstraints)
        let id = req.params.id;
        const updatedTeam = await eplModel.update(body, {
            where: {
                id:id 
            }
        });
        if (numberOfPlayersConstraints > 21 && numberOfPlayersConstraints < 26 && updatedTeam[0] === 1) {
            res.status(200).json({
                message: "Updated Happily",
                data: updatedTeam
            })
        } else (
            res.status(400).json({
                message: "Either the team ID is not available OR " + "WRONG INPUT: NumberOfPlayers > 25 or < 22",
            })
        )
    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
};

//logic to delete team
export const deleteTeam = async (req, res) => {
    try {
        let id = req.params.id;J
        const deletedTeam = await eplModel.destroy({
            where: {
                id: id
            }
        });
        if (deletedTeam === 0) {
            res.status(400).json({
                message: "TEAM WITH ID NOT FOUND"
            })
        } else {
            res.status(200).json({
                message: "TEAM WITH ID " + id + " SUCESSFULLY DELETED",
                data: deletedTeam
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};


//create a new team record into epl database
export const createTeam = async (req, res) => {
    try {
        let body = req.body;
        let numberOfPlayersConstraints = req.body.numberOfPlayers;
        const createdTeam = await eplModel.create(body, {where: numberOfPlayersConstraints > 21 && numberOfPlayersConstraints < 26 && updatedTeam[0] === 1})
        if (numberOfPlayersConstraints > 21 &&  numberOfPlayersConstraints < 26) {
            res.status(200).json({
                message: "Successfully Created A New team",
                data: createdTeam
            })
        } else {
            res.status(400).json({
                message: "Number of players lesser than 22 or greater than 25"
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
}