import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container shadow-lg p-3 mb-5 mt-4 bg-body rounded handlepart'>
            <h1 className='text-center text-danger '>Que Ans</h1>
            <hr />
            <div className='mt-5'>
                <p className='fw-bold'>প্রশ্নঃ জাভাস্ক্রিপ এবং নোডজেএস এর মধ্যে পার্থক্য কি?</p>
                <p className='fw-bold'>উত্তর:
                </p>
                <div className="container px-4">
                    <div className="row gx-5 gy-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className='border rounded p-3' style={{ height: '225px' }}>
                                <p className='fw-bold'>জাভাস্ক্রিপ</p>
                                <p> <li>জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ
                                    যা ওয়েবসাইটে স্ক্রিপ্ট লেখার জন্য ব্যবহৃত হয়।</li>
                                    <li>জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চালানো যায়।</li>
                                    <li>জাভাস্ক্রিপ্ট ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়।</li>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className='border rounded p-3' style={{ height: '225px' }}>
                                <p className='fw-bold'>নোডজেএস</p>
                                <li>নোডজেএস হলো জাভাস্ক্রিপ্টের রানটাইম এনভায়ারমেন্ট।</li>
                                <li>আমরা নোডজেএস এর ​​সাহায্যে ব্রাউজারের বাইরে জাভাস্ক্রিপ চালাতে পারি।</li>
                                <li>নোডজেএস সার্ভার-সাইড ডেভেলপমেন্টে ব্যবহার করা হয়।</li>
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-3'>
                <p className='fw-bold'>প্রশ্নঃ কখন আপনার নোডজেএস ব্যবহার করা উচিত এবং কখন আপনার মনগোডিবি ব্যবহার করা উচিত?</p>
                <p><span className='fw-bold'>উত্তরঃ</span> মনগোডিবি এবং নোডজেএস দুটি ভিন্ন টেকনোলজি।
                    মনগোডিবি একটা ডাটাবেইজ সিস্টেম  যা আমাকে ডকুমেন্টস সংরক্ষণ,  হালনাগাদ /আপডেট ও জমা করা ডকুমেন্টস গ্রহণ করতে দেয়। <br />
                    নোডজেসের মাধ্যমে সার্ভার বিল্ড করা যায়, যার সাহায্যে ডাটাবেইজ থেকে তথ্য হালনাগাদ করা, গ্রহণ করা ও ব্যবহারসহ যাবতীয় কাজ করতে পারি। <br />
                    এজন্য যখন ডাটা জমা করা ও হালনাগাদ ইত্যাদি কাজের প্রয়োজন তখন মনগোডিবি ব্যবহার করা উচিত আর ডাটাবেইজে রাখা ডাটা গুলো দিয়ে কাজ করার জন্য নোডজেস ব্যবহার করা উচিত</p>

            </div>
            <div className='mt-5 mb-5'>
                <p className='fw-bold'>প্রশ্নঃ jwt এর উদ্দেশ্য কি এবং এটি কিভাবে কাজ করে?</p>
                <p><span className='fw-bold'>উত্তরঃ</span> JWT বা JSON Web Token হলো একটি ওপেন স্টান্ডার্ড যা দুটি পক্ষের(ক্লায়েন্ট ও সার্ভার) মধ্যে সিকিউরিটি ইনফরমেশনগুলো গুলো ভাগ করার জন্য ব্যবহৃত হয়। প্রতিটি JWT এনকোড করার জন্য  JWT অবজেক্ট রয়েছে, যার মধ্যে ক্লাইমস ইনক্লুড করা আছে। <br />
                    টোকেন ইস্যু হওয়ার পরে ক্লাইমসগুলি পরিবর্তন করা যাবে না তা নিশ্চিত করার জন্য একটি ক্রিপ্টোগ্রাফিক অ্যালগরিদম ব্যবহার করে JWT গুলি স্বাক্ষরিত হয়</p>

            </div>
            <div className='d-flex align-items-center'>
                <div className='bg-dark w-50' style={{ height: '1px' }}></div>
                <p className='pt-3 px-3 fw-bold'>X</p>
                <div className='bg-dark w-50' style={{ height: '1px' }}></div>
            </div>
        </div>
    );
};

export default Blogs;