import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => (
  <div className="w-screen flex min-h-screen absolute">
    <Head>
      <title>Wolf.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className="xs:mt-10 mt-20 lg:mt-0 md:mt-10 hero  bg-gray-800">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="p-4">
          <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold ">Hello, I'm Wolf</h1>
          <p className="py-6 text-sm">I am a software developer who loves education</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  </div>
);

export default Home;
