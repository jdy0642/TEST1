package com.ship.web.brd;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.ship.web.pxy.PageProxy;

@Repository
public interface CgvMapper {
	public String countCgv();
	public void insertCgv(Cgv cgv);
	public List<Cgv> selectList(PageProxy pxy);
	public void updateCgv(Cgv param);
	public void deleteCgv(Cgv param);
}
