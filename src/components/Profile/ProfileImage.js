import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const ProfileInfo = () => {
  const { colorMode } = useColorMode();
  
  return (
    <div 
      style={{
        display: 'flex',         // 使用 Flexbox 布局
        flexDirection: 'row',    // 横向排列头像和信息
        alignItems: 'center',    // 垂直居中
        justifyContent: 'flex-start',  // 确保从左侧开始排列
        width: '100%',           // 容器宽度为 100%
        margin: 0,               // 清除默认外边距
        padding: 0,              // 清除默认内边距
      }}
    >
      <img
        src='../../assets/images/profile.jpg'
        alt="个人头像"
        style={{
          width: '200px',        // 设置头像宽度
          height: '200px',       // 设置头像高度
          marginRight: '170px',   // 头像与文字之间的间距
          borderRadius: '50%',   // 头像圆形效果
          objectFit: 'cover',    // 确保图片填充区域
        }}
      />
      <div style={{ marginRight: '100px' }}>
        <p><strong>姓名：</strong>林子昕</p>
        <p><strong>学校：</strong>浙江大学</p>
        <p><strong>专业：</strong>计算机科学与技术学院 22 级信息安全</p>
        <p><strong>绩点：</strong>4.12/5.0</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
