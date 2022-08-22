import { createContext, useState } from "react";
import * as Haptics from "expo-haptics";

export const NewsContext = createContext(null);

export const NewsContextProvider = ({ children }) => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [topHeadlines, setTopHeadlines] = useState([]);
  const [specificNews, setSpecificNews] = useState();
  const [categoryNews, setCategoryNews] = useState([]);
  const [savedNews, setSavedNews] = useState([]);

  const handleSave = (item) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSavedNews([...savedNews, item]);
  };

  const handleRemoveSavedNews = (id) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setSavedNews(savedNews.filter((item, index) => index !== id));
  };
  return (
    <NewsContext.Provider
      value={{
        newsArticles,
        setNewsArticles,
        topHeadlines,
        setTopHeadlines,
        setSpecificNews,
        specificNews,
        categoryNews,
        setCategoryNews,
        savedNews,
        setSavedNews,
        handleSave,
        handleRemoveSavedNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
