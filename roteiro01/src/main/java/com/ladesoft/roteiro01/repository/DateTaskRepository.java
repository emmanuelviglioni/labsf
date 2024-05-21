package com.ladesoft.roteiro01.repository;

import com.ladesoft.roteiro01.entity.DateTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DateTaskRepository extends JpaRepository<DateTask, Integer> {
}
