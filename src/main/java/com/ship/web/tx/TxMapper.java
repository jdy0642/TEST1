package com.ship.web.tx;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ship.web.brd.Cgv;

@Repository
@Transactional
public interface TxMapper {
	@Insert("insert into cgv(content) VALUES (#{content})")
	public void insertCgv(Cgv c);
	
	
}
