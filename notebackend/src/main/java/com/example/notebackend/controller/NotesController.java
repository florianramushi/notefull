package com.example.notebackend.controller;


import com.example.notebackend.entity.Note;
import com.example.notebackend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController //Every method will return Json responsse The purpose of using rest com.example.notebackend.controller
@RequestMapping("/api")
@CrossOrigin("*") // allow any request coming from any host
public class NotesController {
    @Autowired
    NoteRepository nRepo;


    @GetMapping("/notes")
    public ResponseEntity<List<Note>> readNotes () {
        return new ResponseEntity<List<Note>>(nRepo.findAll(), HttpStatus.OK);
    }
}
