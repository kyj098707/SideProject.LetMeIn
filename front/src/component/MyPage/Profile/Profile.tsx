import React, { useRef, useState, RefObject, MutableRefObject, ChangeEvent } from 'react'
import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons';
import { Input, Image, Button, Space, Modal, Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const Profile = () => {
  const [nicName, setNicName] = useState<string>('닉네임을 입력해주세요.');
  const [inputValue, setInputValue] = useState<string>('기본 닉네임');
  const inputRef = useRef<HTMLInputElement>(null); // TODO : useRef로 최적화 시키기.

  const [open, setOpen] = useState<boolean>(false); // 스택 모달 관련
  const [selectTech, setSelectTech] = useState<CheckboxValueType[]>([]);

  const { TextArea } = Input; // TextArea 관련

  const handleButtonClick = () => {
    setNicName(inputValue);
    // TODO : useRef로 최적화 시키기.
    // if (inputRef.current !== null) {
      
    //   setNicName(inputRef.current);
    //   console.log(inputRef);
    // }
    console.log(inputRef.current?.value);
    alert('닉네임 변경이 완료되었습니다.')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  const onCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    setSelectTech(checkedValues);
  };
  const onTextAreaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    // TODO : 어떻게 처리할지 고민
    console.log('Change:', e.target.value);
  }
  

  return (
    <>
      <MyInfoBox>
        {/* TODO https://velog.io/@kbing14/React-%ED%94%84%EB%A1%9C%ED%95%84-%EC%82%AC%EC%A7%84-%EC%97%85%EB%A1%9C%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0 참고해서 이미지 업로드 다시 만들기. */}
        <Image
          width={200}
          height={200}
          src="error"
          fallback="data:image/png;base64,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"
        />
        <p>안녕하세요. {nicName}님</p>
        <CustomInput onChange={handleInputChange} placeholder="닉네임을 입력해주세요." prefix={<UserOutlined />}  />
        <CustomButtonSpace wrap>
          <Button type="primary" onClick={handleButtonClick}>닉네임 변경</Button>
        </CustomButtonSpace>
      </MyInfoBox>

      <MyProfileBox>
        <h2>내 프로필</h2>
        <p>프로젝트 신청 시 사용되는 프로필 입니다.</p>

        <MyProfileContentBox>
          <p>저의 성별은 xx 입니다</p>
          <p>저의 나이는 xx 입니다</p>
          <p>저의 MBTI는 xx 입니다</p>
          <p>저의 분야는 xx 입니다</p>
          <p>저는 대부분 xx 에 활동합니다</p>
        </MyProfileContentBox>
      </MyProfileBox>

      <MyStackSelectBox>
        <h2>기술 스택을 선택해주세요</h2>
        <Button onClick={() => setOpen(true)}>
            선택
        </Button>
        <Modal
          title="저는 이런 것을 할 수 있어요(몇 개로 할까용?)"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
        >
          <Checkbox.Group style={{ width: '100%', marginTop: '2%' }} onChange={onCheckboxChange}>
            <Row>
              <Col span={5}>
                <Checkbox value="JavaScript">JavaScript</Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value="TypeScript">TypeScript</Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value="Java">Java</Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value="C++">C++</Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value="???">뭘 넣을까요</Checkbox>
              </Col>
              <Col span={5}>
                <Checkbox value="???">뭘 넣을까요</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Modal>
      </MyStackSelectBox>
      
      <MyStackPrintBox>
        {/* TODO 해시태그처럼 디자인 수정 */}
        <p>선택된 기술 스택: {selectTech.join(', ')}</p>
      </MyStackPrintBox>

      <MyIntroBox>
        <p>본인소개</p>
        <TextArea style={{width:'25%', height:'20vh'}} showCount maxLength={100} onChange={onTextAreaChange} />
        <Button style={{marginTop:'4%', marginBottom:'4%'}}>내 프로필 수정</Button>
      </MyIntroBox>
    </>
  );
};

export default Profile

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const MyInfoBox = styled(CenterBox)`
  font-size: 12px;
  color: gray;
`

const CustomInput = styled(Input)`
  width: 30%;
  margin-top: 2%;
`

const CustomButtonSpace = styled(Space)`
  margin-top: 2%;
`

const MyProfileBox = styled(CenterBox)`
  margin-top: 5%;

  h2, p {
    margin: 0px;
    margin-bottom: 1%;
  }
  p {
    margin-bottom: 2%;
    font-size: 12px;
    color: gray;
  }
`

const MyProfileContentBox = styled(CenterBox)`
  p {
    font-size: 16px;
    color: black;
  }
`

const MyStackSelectBox = styled(CenterBox)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5%;
  h2 {
    margin: 0;
    margin-right: 1%;
  }
`
const MyStackPrintBox = styled(CenterBox)``

const MyIntroBox = styled(CenterBox)`
  margin-top: 5%;
`