package com.ladesoft.roteiro01.controller;

import com.ladesoft.roteiro01.entity.DeadLineTask;
import com.ladesoft.roteiro01.service.DeadLineTaskService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/deadLineTask")
public class DeadLineTaskController {
    private final DeadLineTaskService m_deadLineTaskService;
    public DeadLineTaskController(DeadLineTaskService p_deadLineTaskService)
    {
        m_deadLineTaskService = p_deadLineTaskService;
    }

    @GetMapping()
    @Operation(summary = "Lista todas as tarefas da lista")
    public ResponseEntity<List<DeadLineTask>> listAll()
    {
        try
        {
            List<DeadLineTask> v_listOfDeadLineTask = m_deadLineTaskService.getAllTask();
            if(v_listOfDeadLineTask == null)
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(v_listOfDeadLineTask, HttpStatus.OK);
        }
        catch(Exception ex)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }

    @PostMapping()
    @Operation(summary = "Cria nova tarefa")
    public ResponseEntity<String> create(@ModelAttribute DeadLineTask deadLineTask)
    {
        try
        {
            return new ResponseEntity<>(m_deadLineTaskService.createTask(deadLineTask),HttpStatus.OK);
        }
        catch(Exception ex)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }

    @PutMapping()
    @Operation(summary = "Muda o status da tarefa")
    public ResponseEntity<String> edit(@ModelAttribute DeadLineTask deadLineTask)
    {
        try
        {
            return new ResponseEntity<>(m_deadLineTaskService.editTask(deadLineTask),HttpStatus.OK);
        }
        catch(Exception ex)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }
}
