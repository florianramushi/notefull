package com.example.notebackend.controller;


import com.example.notebackend.entity.Note;
import com.example.notebackend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/notes")
    public ResponseEntity<Note>createNote(@RequestBody Note note){

        return new ResponseEntity<Note>(nRepo.save(note),HttpStatus.CREATED);

    }

    @GetMapping("/notes/{id}")
    public ResponseEntity<Note> readNote(@PathVariable Long id) {
        return new ResponseEntity<Note>(nRepo.findById(id).get(), HttpStatus.OK);
    }

    @DeleteMapping("/notes/{id}")
    public ResponseEntity<HttpStatus>deleteNote(@PathVariable Long id){
          nRepo.deleteById(id);
return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/notes")
    public ResponseEntity<Note>updateNote(@RequestBody Note note){
 return new ResponseEntity<Note>(nRepo.save(note),HttpStatus.OK);
    }

}
