import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div>
                <h4>Context Api</h4>
                <p>
                    কোন্টেক্স এপিআই এক কোম্পনেন্ট থেকে অন্য কোম্পনেন্টে ডাটা পাঠানোর একটি মাধ্যম।
                    প্রোপস(props) ড্রিলিং কে এভোয়েড করারা জন্য কোন্টেক্স এপিআই ব্যাবহার করা হয়।
                    কোন্টেক্স এপিআই এর মাধ্যমে সহজেই এক কোম্পনেন্ট এর ডাটা অন্য কোম্পনেন্টে পাঠানো যায়।
                    কোন্টেক্স এপিআই ব্যাবহারের জন্য প্রথমে কোন্টেক্স এপিআই ক্রিয়েট
                    <span className='text-danger'>(createContext)</span>করতে হবে।
                    দ্বিতীয় ধাপে কোম্পনেন্ট গুলোকে প্রোভাইডার
                    <span className='text-danger'>(.Provider)</span>এর ভিতর রাখতে(wrap) হবে। এর পর
                    কোন্টেক্স এপিআই এর ভ্যালু ব্যাবহার করার জন্য কোন্টেক্স <span className='text-danger'>(useContext)</span>
                    ব্যাবহার করতে হবে।
                </p>
            </div>
            <div>
                <h4>Inline, Inline Block, Block</h4>
                <strong>Inline</strong>
                <p>ইনলাইন এলিমেন্ট একটার পর একটা পাশা পাশি বসে। ইনলাইন এলিমেন্ট এ height, width
                    কাজ করে না। কিছু ইনলাইন ট্যাগ হলো - <strong>span ,a, strong, small</strong>
                </p>
                <strong>Inline Block</strong>
                <p>
                    ইনলাইন ব্লক এলিমেন্ট ইনলাইন এলিমেন্ট এর মতই, একটার পর পাশা পাশি বসে। কিন্তু  ইনলাইন ব্লক এলিমেন্ট
                    এ height, width সেট করা যায়।
                </p>
                <strong>Block</strong>
                <p>
                    ব্লক এলিমেন্ট হলো ইনলাইন এলিমেন্ট এর সম্পূর্ণ বিপরীত। প্রতিটা ব্লক এলিমেন্ট আলাদা আলাদা লাইনে সেট
                    হয়। মানে পুরো width ব্যাবহার করে। কিছু ব্লক এলিমেন্ট হলো - <strong>div, section, h1, p</strong>
                </p>
            </div>
        </div>
    );

};

export default Blogs;