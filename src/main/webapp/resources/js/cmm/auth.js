"use strict"
var auth = auth || {}
auth = (()=>{
  const WHEN_ERR='호출하는 js 파일을 찾을 수 없습니다.'
  let _,js,css,img,auth_vue_js,router_js,page_vue_js,compo_vue_js;
  let init =()=>{
     _=$.ctx()
     js=$.js()
     css=$.css()
     img=$.img()
     auth_vue_js = js+'/vue/auth_vue.js'
     router_js = js+'/cmm/router.js'
     page_vue_js = js+'/vue/page_vue.js';
	 compo_vue_js = js+'/vue/compo_vue.js';
  }
  let onCreate =()=>{
       init()
       $.when(
             $.getScript(auth_vue_js),
             $.getScript(page_vue_js),
             $.getScript(compo_vue_js)
       ).done(()=>{
           setContentView()
       }).fail(()=>{
           alert(WHEN_ERR)
       })
  }
    let setContentView =()=>{
        $('head').html(auth_vue.login_head({css:$.css(), img: $.img()}))
        $('body').html(auth_vue.login_body({css:$.css(), img: $.img()})).addClass('text-center')
        $('<div id= "recent_updates"></div>').appendTo('body')
        bugs()
        cgv()
        eng()
        ready()
    }
    
    let recent_updates=x=>{	
    	$('#recent_updates').empty()
		alert('호출된 페이지 번호: ' +x.page)
		$.getJSON(_+'/cgv/page/'+x.page+'/size/'+x.size,d=>{
			$.each(d.cgv, (i,j)=>{
				$('<div class="media text-muted pt-3" >'+
				'<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
				'<p id="id_'+i+'"class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
				'</p></div>').appendTo('#recent_updates')
				$('<strong class="d-block text-gray-dark">@<a style="color: white;">'+j.content+'</a></strong>')
				.appendTo("#id_"+i)
				.click(()=>{
					alert('id 클릭')
				})
				$('<a>'+j.title+'</a>')
				.appendTo("#id_"+i)
				.click(()=>{
					alert('제목 클릭')
					detail(j)
				})
			})
			//
				let pxy = d.pxy
			$(page_vue.page())
				.appendTo('#recent_updates')
			$('#pagination').empty()
			$('#recent_updates div[class ="container"] h6').empty()
			$(compo_vue.pageSize())
				.appendTo('#recent_updates div[class ="container"] h6')
			$('<form id="paging_form">'+
				'  <select size="1" style="float: right">'+
				'  </select>'+
				'</form><br>')
				.appendTo('#recent_updates div[class ="container"] h6')
			$.each([{sub:'5개씩 보기', val:'5'},{sub:'10개씩 보기',val:'10'},{sub:'15개씩 보기', val:'15'}],(i,j)=>{
				$('<option value='+j.val+'>'+j.sub+'</option>')
				.appendTo('#paging_form select')
			})
			$('#paging_form option[value="'+pxy.pageSize+'"]').attr('selected',true)
			$('#paging_form').change(()=>{
				recent_updates({page: pxy.pageNum, size:$('#paging_form option:selected').val()})
			})
			
			if(pxy.existPrev)		{
				$('<li class="page-item"><a class="page-link" href="#">'+'이전'+'</a></li>')
				.appendTo('#pagination')
				.click(e=>{
					e.preventDefault()
					recent_updates({page: pxy.prevBlock, size: pxy.pageSize})
				})
			}
			for(let i = pxy.startPage; i <= pxy.endPage ; i++) {
				if(pxy.pageNum == i){
					$('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
					.appendTo('#pagination')
					.addClass('active')
				}else{
					 $('<li class="page-item"><a class="page-link" href="#">'+i+'</a></li>')
		               .appendTo('#pagination')
		                 .click(function(){
		                  recent_updates({page: $(this).children('.page-link').text(), size: pxy.pageSize})})
				}
			}
			if(pxy.existNext){
				$('<li class="page-item"><a class="page-link" href="#">'+'다음'+'</a></li>')
				.appendTo('#pagination')
				.click(e=>{
					e.preventDefault()
					recent_updates({page: pxy.nextBlock, size: pxy.pageSize})
				})
			}	
			$('#pagination')
			.css({'place-content':'center'})
		})
	}
    
    let bugs =()=>{
        $('<button>',{
            type : "submit",
            text : "BUGS CRAWL",
            click : e=>{
                e.preventDefault()
                alert('벅스 크롤링!')
                    
                $('#main').empty()
                $('<textarea id="text1" style="width: 1300px; height: 3000px;"/>').appendTo('#main')
                $.getJSON(_+'/tx/bugscrawling',d=>{
                    alert('ㄱㄱ')
                    bugscrawl(d)
                   // recent_updates({page: '1', size:'4'})
                })
                    
            }
        }).addClass("button").appendTo('#bugs')
        
        
    }
    let cgv =()=>{
        $('<button>',{
            type : "submit",
            text : "CGV CRAWL",
            click : e=>{
                alert('cgv 크롤링!')
                $('#main').empty()
                e.preventDefault()
                 $('#main').empty()
                //$('<textarea id="text2" style="width: 1300px; height: 3000px;"/>').appendTo('#main')
                $.getJSON(_+'/tx/cgvcrawling',d=>{
                    //cgvcrawl(d)
                    recent_updates({page: '1', size:'4'})                    	
                    
                })
                
            }
        }).addClass("button").appendTo('#cgv')
    }
    let eng =()=>{
        $('<button>',{
            type : "submit",
            text : "ENG CRAWL",
            click : e=>{
                alert('eng 크롤링!')
                $('#main').empty()
                e.preventDefault()
                 $('#main').empty()
                $('<textarea id="text3" style="width: 1300px; height: 3000px;"/>').appendTo('#main')
                $.getJSON(_+'/tx/engcrawling',d=>{
                	engcrawl(d)
                	//recent_updates({page: '1', size:'4'})
                })
            
            }
        }).addClass("button").appendTo('#eng')
    }
    let ready =()=>{
        $('<button>',{
            type : "submit",
            text : "COMING SOON",
            click : e=>{
                alert('아직 활성화 되지 않은 기능입니다')
                e.preventDefault()
                
            }
        }).addClass("button").appendTo('#ready')
    }
    let bugscrawl =d=>{
          $.each(d,(i,j)=>{
              $('#text1').append(j)
          })
      }
      let cgvcrawl =d=>{
           $.each(d.list,(i,j)=>{
              $('#text2').append(j)
          })
      }
      let engcrawl = d =>{
           $.each(d,(i,j)=>{
              $('#text3').append(j)
          })
      }
        return{onCreate}
    
})()