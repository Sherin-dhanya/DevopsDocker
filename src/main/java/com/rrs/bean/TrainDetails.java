package com.rrs.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="train_details")
public class TrainDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int train_no;
	private String train_name;
	private String location_from;
	private String location_to;
	private int seat_availability;
	public int getTrain_no() {
		return train_no;
	}
	public void setTrain_no(int train_no) {
		this.train_no = train_no;
	}
	public String getTrain_name() {
		return train_name;
	}
	public void setTrain_name(String train_name) {
		this.train_name = train_name;
	}
	public String getLocation_from() {
		return location_from;
	}
	public void setLocation_from(String location_from) {
		this.location_from = location_from;
	}
	public String getLocation_to() {
		return location_to;
	}
	public void setLocation_to(String location_to) {
		this.location_to = location_to;
	}
	public int getSeat_availability() {
		return seat_availability;
	}
	public void setSeat_availability(int seat_availability) {
		this.seat_availability = seat_availability;
	}
	
	
	
}
