import { HashRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home'
import VideoPage from './Pages/VideoPage'
import SearchResults from './Pages/SearchResults'
import ChannelPage from './Pages/ChannelPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoId" element={<VideoPage />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/trending" element={<Home />} />
        <Route path="/subscriptions" element={<Home />} />
        <Route path="/films" element={<Home />} />
        <Route path="/music" element={<Home />} />
        <Route path="/gaming" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/learning" element={<Home />} />
        <Route path="/sports" element={<Home />} />
        <Route path="/history" element={<Home />} />
        <Route path="/watch-later" element={<Home />} />
        <Route path="/liked-videos" element={<Home />} />
        <Route path="/channel/:channelId" element={<ChannelPage />} />
      </Routes>
    </HashRouter>
  )
}
