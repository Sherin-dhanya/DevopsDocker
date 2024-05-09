package com.rrs.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rrs.bean.TrainDetails;
import com.rrs.dao.TrainDAO;



@RestController
@CrossOrigin("*")
public class TrainController {

	@Autowired
	private TrainDAO trainDAO;
	
	@PostMapping("InsertTrain")
	public TrainDetails insertTrain(@RequestBody TrainDetails train) {
	return trainDAO.save(train);
	}
	
	@GetMapping("ViewAllTrain")
	public List<TrainDetails> viewAllTrain(){
		return (List<TrainDetails>) trainDAO.findAll();
	}
	
	@GetMapping("FindTrain/{id}")
	public TrainDetails findTrain(@PathVariable Integer id) {
		return trainDAO.findById(id).get();
	}
	
	@PutMapping("/UpdateTrain")
	public TrainDetails updateTrain(@RequestBody TrainDetails train) {
		return trainDAO.save(train);
	}
	
	@DeleteMapping("/DeleteTrain/{id}")
	public String deleteTrain(@PathVariable Integer id) {
		String msg=" ";
		try {
			trainDAO.deleteById(id);
			msg="train Details Deleted Successfully";
		}catch(Exception e) {
			msg="train Details not found";
		}
		return msg;

	}
	@GetMapping("/Autopop")
	public List<Integer> doAutoPop(){
		return trainDAO.getIdList();
	}
//	@GetMapping("GetByName/{train_name}")
//	List<TrainDetails> getByName(@PathVariable String trainDetails){
//		return trainDAO.findByName(trainDetails);
//	}
	
	
}


