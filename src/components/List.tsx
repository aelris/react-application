import React from "react";

export interface ListProps {
    items: string[],
    delete(item: string): void
}

export interface ListState {
    filtered: string[]
}

class List extends React.Component<ListProps, ListState> {
    constructor(props: ListProps) {
        super(props);
        this.state = {
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.items
        })
    }

    componentWillReceiveProps(nextProps: ListProps) {
        this.setState({
            filtered: this.props.items
        })
    }

    handleChange (e: any) {
        if (e.target.value === "") {
            this.setState({
                filtered: this.props.items
            })
            return
        }

        const newList = this.props.items.filter(item => {
            const lowcase = item.toLowerCase();
            const filter = e.target.value.toLowerCase();
            return lowcase.includes(filter);
        })

        this.setState({
            filtered: this.props.items
        })
    }

    render() {
        return (
            <div>
                <input type="text" className="input" placeholder="What do you want to watch?" onChange={this.handleChange}/>
                <ul>
                    {this.state.filtered.map((item: string) => (
                        <li key={item}>{item}
                            <span className="delete" onClick={() => this.props.delete(item)}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;
