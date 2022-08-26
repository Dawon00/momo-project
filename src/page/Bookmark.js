import { useRecoilState } from "recoil";
import { bookmarkRes } from "../atom";
import data from "../components/api_components/Api.json"
import styled from "styled-components";
import CategoryBox from "../components/Home_components/CategoryBox";
import Footer from "../components/Home_components/Footer";

const Wrap = styled.div`

    width:100%; 
    min-height:100vh;
    display:flex;
    flex-direction:column;
`
const BookmarkWrap = styled.div`
    flex:1;
    margin-top: 65px;
    padding:20px;
`
const BookmarkText = styled.span `
    font-size: 30px;
    font-weight: bold ;
`
const BookmarkList = styled.div`
    padding:20px;
    display:grid;
    grid-template-columns:1fr 1fr ;
`
function Bookmark(){
    const [bookmark, setBookmark] = useRecoilState(bookmarkRes);


    const bookmarkData = bookmark.map(b=> data.apiList.filter(d => {
        return d.name.includes(b);
    }))
    console.log(bookmarkData);

    return(
        <Wrap>
            <BookmarkWrap>
            <BookmarkText>나의 스크랩</BookmarkText>
            <BookmarkList>
            {bookmarkData.map(b =>
            
                <CategoryBox 
                    index = {b[0].key}
                    name = {b[0].name}
                    bCategory = {b[0].bCategory}
                    bLocation = {b[0].bLocation}
                    hastag = {b[0].hashtag}
                    url = {b[0].photoUrl}
                    />
            
                
                 )}
             </BookmarkList>    
            </BookmarkWrap>
            <Footer/>
        </Wrap>
    )
}

export default Bookmark;