"use client";

import api from "@/services/Api";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ClassBox from "./components/classBox/classBox";

interface ClassroomObject {
  title: string,
  description: string,
  auxiliarLabel: string,
  topBackgroundSrc: string,
  userImageSrc: string,
  classroomAssignments: [
    {
      id: string,
      topLabel: string,
      bottomLabel: string
    }
  ]
}

export default function Home() {
  const [classroomObject, setClassroomObject] = useState<ClassroomObject[]>([]);
  const [profileImageSrc, setProfileImageSrc] = useState<string>('');

  useEffect(() => {
      reloadList();
      getProfileImageSrc();
  }, []);

  const reloadList = async () => {
      try {
        const response = await api.get("/classroom/search-all?userId=????????");
        setClassroomObject(response.data);
      } catch (error) {
        console.error("Erro ao realizar a requisição para a api. Detalhes:\n" + error);
      }
  };

  const getProfileImageSrc = async () => {
    try {
      const response = await api.get("/classroom/profile-image/search?userId=????????");
      setProfileImageSrc(response.data);
    } catch (error) {
      console.error("Erro ao realizar a requisição para a api. Detalhes:\n" + error);
    }
};
  
  const renderClassBoxComponent = () => {
    return (
      <>
        {classroomObject.map((classroomObject: ClassroomObject) => (
          <ClassBox 
            key={`${classroomObject.title}-${classroomObject.auxiliarLabel}`}
            title={classroomObject.title} 
            description={classroomObject.description} 
            classGroup={classroomObject.auxiliarLabel} 
            topBackgroundSrc={classroomObject.topBackgroundSrc} 
            userImageSrc={classroomObject.userImageSrc} 
            assignments={classroomObject.classroomAssignments} 
          />
        ))}
      </>
    );
  }

  return (
    <div className="App">
      <Header profileImageSrc={profileImageSrc} />  {/* Barra superior */}
      <Sidebar /> {/* Barra lateral */}
      
      <main className="main-content">
        <div className="classes-container">
          {renderClassBoxComponent()}
        </div>
      </main>
    </div>
  );
}
