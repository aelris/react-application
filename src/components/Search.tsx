import React from "react";
import List from './List'
import MovieCard from "./MovieCard";

export interface Props {
    list?: {title: string[], desc:string[], img:string[]}
}

export interface State {
    list: {title: string[], desc:string[], img:string[]}
}

class Search extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state={
            list:
                {
                    title:["Rick and Morty"],
                    desc:["HGDGJHJHJDH"],
                    img:["./images/RickAndMorty.jpg"]
                }
        }
        this.removeItem=this.removeItem.bind(this)
    }

    addItem(e: any) {
        e.preventDefault();

        let list=this.state.list.title;

        const newItem=document.getElementById("addInput") as HTMLInputElement;
        const form=document.getElementById("addItemForm") as HTMLFormElement;

        if(newItem.value!="")
        {
            list.push(newItem.value);
            this.setState({

            });
            newItem.classList.remove("is-danger");
            form.reset();
        } else
        {
            newItem.classList.add("is-danger");
        }
    }

    removeItem(item: string) {
        const list=this.state.list.title.slice();
        list.some((value,index) => {
            if(value===item)
            {
                list.splice(index,1);
                return true;
            } else
            {
                return false;
            }
        });
        this.setState({

        });
    }

    public render() {
        return (
            <div className="content">
                <div className="container">
                    <section className="section">
                        <List items={this.state.list.title} delete={this.removeItem}>
                        {/*    render={() => {*/}
                        {/*    return (*/}
                        {/*        <MovieCard img={this.state.list.img[0]} title={this.state.list.title[0]} description={this.state.list.desc[0]}/>*/}
                        {/*    )*/}
                        {/*}*/}
                        {/*}*/}
                        </List>
                    </section>
                </div>
            </div>
    );
    }
}


export default Search;
