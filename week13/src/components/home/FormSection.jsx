import React from 'react'
import {ThemeColorContext} from '../../context/context'
import { Title } from '../layout/common';
import {useNavigate} from 'react-router-dom';
import {Card,Wrapper,Button} from '../layout/common';
import Form from './Form';
import { useContext } from 'react';
import { UserInfoContext } from '../../context/UserInfoContext';

const FormSection = () => {
  const mode= useContext(ThemeColorContext);
  const navigate= useNavigate();
  const {dispatch}=useContext(UserInfoContext);
  const [formData, setFormData]=React.useState({
    name:'',
    email:'',
    birth:'',
    gender:''
  }); // useState로 폼 상태({name, email, birth, gender}) 관리
  const handleChange=(e)=>{
    const {name,value}=e.target; //어떤 input에서 어떤 글자가 들어왔는지 확인
    setFormData((prev)=>({
      ...prev,
      [name]:value // 바뀐 입력창의 값을 새로 적어서 덮어쓰기
    }));
  };

  const handleSubmit = () => {
    dispatch({type:'SET_USER_INFO', payload:formData}); // 제출 시 Contexdt에 최종 수정된 formData 기록
    navigate('/mypage');
  }

  return (
    <Wrapper>
      <Card>
        <Title>회원 정보 입력</Title>
        <Form type='text' label='이름' name='name' value={formData.name} onChange={handleChange} />
        <Form type='email' label='이메일' name='email' value={formData.email} onChange={handleChange} />
        <Form type='date' label='생년월일' name='birth' value={formData.birth} onChange={handleChange} />
        <Form label='성별' name='gender' value={formData.gender} onChange={handleChange} />

        <Button 
          mode={mode.button}
          onClick={handleSubmit}
        >
          제출하기
        </Button>
      </Card>
    </Wrapper>
  )
}

export default FormSection
