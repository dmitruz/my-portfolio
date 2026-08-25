import clinic from "../../images/node-1.png";
import carRent from "../../images/car-ren.png";
import textAnalyzerImg from "../../images/python-1.png";
import collegeImg from "../../images/college.png";



export const BackendProjects = [
    {
        title: "Car Sharing.",
        description: "A REST API backend for a car rental service, built with Node.js, Express, and MongoDB (Mongoose). Supports user authentication, car catalog management, and booking with date-range availability checks.",
        image: carRent,
        code: "https://github.com/dmitruz/car-rent-service",
    },
    {
        title: "Clinic Management.",
        description: "A secure, modular, and role-based REST API powering Clinic Management System.Built using Node.js, Express, Sequelize ORM, MySQL, Docker deployment",
        image: clinic,
        code: "https://github.com/dmitruz/clinic-management-backend",
    },
    {
        title: "Text Analyzer APP",
        description: "Text Analysing app. Rate yout typing speed and calculates words and symbols. Using React and Flask",
        image: textAnalyzerImg,
        code: "https://github.com/dmitruz/text_analysis_app",

    },
    {
        title: "College ERP",
        description: "A Django-based College ERP (Enterprise Resource Planning) system designed to manage academic and administrative operations through a RESTful API.",
        image: collegeImg,
        code: "hhttps://github.com/dmitruz/college_erp",

    },




];
