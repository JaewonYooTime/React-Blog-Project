import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">About the Developer</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1702741179903-f962e08c809e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer"
              className="mb-4 rounded-full"
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '300px' }}
            />
            <h3 className="text-2xl font-bold mb-2">유 재 원</h3>
            <p className="text-gray-600 mb-4 text-center">
               달리기를 사랑하고, 꾸준함과 성실함을 바탕으로 성장하고 있는 프론트엔드 개발자 지망생
            </p>
          </div>
          <div className="text-lg text-gray-800 space-y-4">
            <h1>안녕하세요! 저는 유재원입니다.</h1>
            <p>달리기를 사랑하고, 꾸준함과 성실함을 바탕으로 성장하고 있는 <span class="highlight">프론트엔드 개발자 지망생</span>입니다.</p>
            
            <h2 class="section-title">🎯 제 목표: 프론트엔드 개발자로서의 성취</h2>
            <p>프론트엔드 개발에 대한 열정으로 가득 차 있으며, 최신 기술 트렌드를 따라가며 사용자 경험을 최우선으로 고려하는 웹 애플리케이션을 개발하고자 합니다. 현재는 웹 기술에 대한 깊은 이해를 바탕으로 다양한 프로젝트에 참여하며 실력을 쌓아가고 있습니다.</p>
            
            <h2 class="section-title">🏃‍♂️ 달리기와 성실함: 저를 형성하는 두 가지 핵심 가치</h2>
            <p>달리기는 제 인생에서 중요한 부분을 차지하고 있습니다. 마라톤 풀코스를 3시간 28분에 완주한 경험은 저에게 많은 것을 가르쳐 주었습니다. 긴 거리와 시간의 도전 속에서 인내와 꾸준함의 가치를 배우게 되었고, 이러한 자세는 개발자로서의 제 커리어에도 큰 도움이 되고 있습니다.</p>
            
            <h2 class="section-title">🔍 지속적인 학습과 성장</h2>
            <p>프론트엔드 개발자는 끊임없이 변화하는 분야이기에, 새로운 기술과 도구를 배우는 것에 대한 열정을 가지고 있습니다. 저의 블로그에서는 웹 개발에 관한 다양한 주제와 경험을 나누며, 함께 성장해 나가는 과정을 공유할 것입니다.</p>
            
            <h2 class="section-title">💬 함께 소통하고 성장해요!</h2>
            <p>블로그를 통해 여러분과 소통하고, 유용한 정보와 팁을 공유하며 함께 발전해 나가기를 기대합니다. 질문이나 피드백이 있다면 언제든지 환영합니다. 개발자라는 길을 함께 걸어가며 서로의 경험을 나누고, 더 나은 미래를 향해 나아가요.</p>
            
            <p>감사합니다!</p>
            <p><span class="highlight">유재원 드림</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
