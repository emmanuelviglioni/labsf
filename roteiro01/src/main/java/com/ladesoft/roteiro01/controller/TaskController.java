package com.ladesoft.roteiro01.controller;

import com.ladesoft.roteiro01.entity.DateTask;
import com.ladesoft.roteiro01.entity.DeadLineTask;
import com.ladesoft.roteiro01.entity.ITask;
import com.ladesoft.roteiro01.entity.Task;
import com.ladesoft.roteiro01.repository.DateTaskRepository;
import com.ladesoft.roteiro01.repository.DeadLineTaskRepository;
import com.ladesoft.roteiro01.repository.TaskRepository;
import com.ladesoft.roteiro01.service.DateTaskService;
import com.ladesoft.roteiro01.service.DeadLineTaskService;
import com.ladesoft.roteiro01.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/task")
public class TaskController {

    private final TaskService m_taskService;
    private final DeadLineTaskService m_deadLineTaskService;
    private final DateTaskService m_dateTaskService;


    public TaskController(TaskService p_taskService, DateTaskService mDateTaskService, DeadLineTaskService mDeadLineTaskService, DeadLineTaskService mDeadLineTaskService1, DateTaskService mDateTaskService1)
    {
        m_taskService = p_taskService;
        m_deadLineTaskService = mDeadLineTaskService1;
        m_dateTaskService = mDateTaskService1;
    }

    @GetMapping(value = {"/listAll", ""})
    @Operation(summary = "Lista todas as tarefas da lista de todos os tipos")
    public ResponseEntity<List<ITask>> listAll()
    {
        try
        {
            List<ITask> v_listOfTask = new ArrayList<>();
            v_listOfTask.addAll(m_taskService.getAllTask());
            v_listOfTask.addAll(m_deadLineTaskService.getAllTask());
            v_listOfTask.addAll(m_dateTaskService.getAllTask());

            if(v_listOfTask.isEmpty())
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(v_listOfTask, HttpStatus.OK);
        }
        catch(Exception ex)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }

    @PostMapping(value= {"/create",""})
    @Operation(summary = "Cria nova tarefa")
    public ResponseEntity<String> create(@ModelAttribute Task task)
    {
        try
        {
            return new ResponseEntity<>(m_taskService.createTask(task),HttpStatus.OK);
        }
        catch(Exception ex)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }

    @PutMapping(value = {"/editTask",""})
    @Operation(summary = "Muda o status da tarefa")
    public ResponseEntity<String> edit(@ModelAttribute Task task)
    {
        try
        {
            return new ResponseEntity<>(m_taskService.editTask(task),HttpStatus.OK);
        }
        catch(Exception ex)
        {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }
}
