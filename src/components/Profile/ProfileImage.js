import React, { useState, useEffect } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const ProfileInfo = () => {
  const { colorMode } = useColorMode();
  
  // 定义 state 用于存储是否为手机视图
  const [isMobile, setIsMobile] = useState(false);

  // 在组件加载时判断屏幕宽度并更新状态
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 根据需要的宽度判断是否为手机
    };

    // 初始化时调用一次
    handleResize();

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 清除事件监听
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // 如果是手机，则改为垂直布局，其他设备保持横向布局
        alignItems: 'center',
        justifyContent: 'center', // 居中内容
        width: '100%',
        margin: 0,
        padding: 0,
      }}
    >
      <img
        src='../../assets/images/profile.jpg'
        alt="个人头像"
        style={{
          width: isMobile ? '150px' : '200px',  // 手机屏幕上头像稍小
          height: isMobile ? '150px' : '200px', // 同上
          marginBottom: isMobile ? '20px' : '0', // 如果是手机，则增加底部间距
          marginRight: isMobile ? '0' : '170px',  // 手机时头像和文字之间的间距为 0
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <div style={{ marginRight: isMobile ? 0 :'100px' }}>
        <p><strong>姓名：</strong>林子昕</p>
        <p><strong>学校：</strong>浙江大学</p>
        <p><strong>专业：</strong>计算机科学与技术学院 22 级信息安全</p>
        <p><strong>绩点：</strong>4.08/5.0</p>
        <p><strong>主修绩点：</strong>4.12/5.0</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
