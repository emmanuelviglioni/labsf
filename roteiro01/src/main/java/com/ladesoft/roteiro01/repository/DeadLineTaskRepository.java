package com.ladesoft.roteiro01.repository;

import com.ladesoft.roteiro01.entity.DeadLineTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeadLineTaskRepository extends JpaRepository<DeadLineTask, Integer> {
}
