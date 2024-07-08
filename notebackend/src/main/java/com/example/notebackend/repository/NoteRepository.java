package com.example.notebackend.repository;

import com.example.notebackend.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//We are creating JPA repository On Jpa Repository we gone provide entity name Note and Long type primary key of enity Note Note is the entity class
@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {
}
