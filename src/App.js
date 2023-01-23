import './App.css';
import Main from './components/pages/main/Main';
import { Routes, Route } from 'react-router-dom';
import AddForm from './components/pages/AddForm/AddForm';
import Layout from './components/Layout/Layout';
import LostFirst from './components/Forms/LostFirst/LostFirst';
import NewAdv from './components/Forms/NewAdv/NewAdv';
import Lost from './components/pages/Lost/Lost';
import LostSecond from './components/Forms/LostSecond/LostSecond';
import LostThird from './components/Forms/LostThird/LostThird';
import LostFourth from './components/Forms/LostFourth/LostFourth';
import LostFifth from './components/Forms/LostFifth/LostFifth';
import Contacts from './components/pages/Contacts/Contacts';
import SupportProject from './components/pages/SupportProject/SupportProject';
import Ads from './components/pages/Ads/Ads';
import Found from './components/pages/Found/Found';
import FoundFirst from './components/Forms/FoundFirst/FoundFirst';
import FoundSecond from './components/Forms/FoundSecond/FoundSecond';
import FoundThird from './components/Forms/FoundThird/FoundThird';
import FoundFourth from './components/Forms/FoundFourth/FoundFourth';
import FoundFifth from './components/Forms/FoundFifth/FoundFifth';
import { CostumList } from './components/ListAds';
import ProfileAd from './components/pages/ProfileAd/ProfileAd';
import Authorization from './components/pages/Authorization/Authorization';
import Registration from './components/pages/Registration/Registration';
// import { useState } from 'react';

function App() {
    return (
        <div className='App'>
            <CostumList>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path='*' element={<Main />} />
                        <Route path='contacts' element={<Contacts />} />

                        <Route path='support' element={<SupportProject />} />
                        <Route
                            path='authorization'
                            element={<Authorization />}
                        />
                        <Route path='registration' element={<Registration />} />
                        <Route path='ads' element={<Ads />} />
                        <Route path='ads/:id' element={<ProfileAd />} />
                        <Route path='add-adv' element={<AddForm />}>
                            <Route path='' element={<NewAdv />} />
                            <Route path='*' element={<NewAdv />} />
                        </Route>
                        <Route path='lost' element={<Lost />}>
                            <Route path='' element={<LostFirst />} />
                            <Route path='*' element={<LostFirst />} />
                            <Route path='lostFirst' element={<LostFirst />} />
                            <Route path='lostSecond' element={<LostSecond />} />
                            <Route path='lostThird' element={<LostThird />} />
                            <Route path='lostFourth' element={<LostFourth />} />
                            <Route path='lostFifth' element={<LostFifth />} />
                        </Route>
                        <Route path='found' element={<Found />}>
                            <Route path='' element={<FoundFirst />} />
                            <Route path='*' element={<FoundFirst />} />
                            <Route path='foundFirst' element={<FoundFirst />} />
                            <Route
                                path='foundSecond'
                                element={<FoundSecond />}
                            />
                            <Route path='foundThird' element={<FoundThird />} />
                            <Route
                                path='foundFourth'
                                element={<FoundFourth />}
                            />
                            <Route path='foundFifth' element={<FoundFifth />} />
                        </Route>
                    </Route>
                </Routes>
            </CostumList>
        </div>
    );
}

export default App;
