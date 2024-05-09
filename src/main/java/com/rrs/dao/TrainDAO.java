package com.rrs.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rrs.bean.TrainDetails;



public interface TrainDAO extends JpaRepository<TrainDetails, Integer> {

	@Query("select train_no from TrainDetails")
	public List<Integer> getIdList();
	
//	@Query("select train_name from TrainDetails")
//	public List<String> getNameList();

//	public List<TrainDetails> findByName(String trainDetails);
	
}
