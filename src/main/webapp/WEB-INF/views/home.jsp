<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>    
<!doctype html>
<html lang="en">
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/auth.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/auth_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/compo_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/page_vue.js"></script>
<script>
	app.run('<%=application.getContextPath()%>');
</script> 
</html>