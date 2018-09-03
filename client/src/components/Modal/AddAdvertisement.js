import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPROs } from './../../actions/proActions'
import validator from 'validator'

import {
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    ModalFooter,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    HelpBlock,
    Button
} from 'react-bootstrap'

class AddAdvertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: {
                value: '',
                isValid: true,
                message: ''
            },
            price: {
                value: '',
                isValid: true,
                message: ''
            },
            imageUrl: {
                value: '',
                isValid: true,
                message: ''
            },
            area: {
                value: '',
                isValid: true,
                message: ''
            },
            numbedrooms: {
                value: '',
                isValid: true,
                message: ''
            },
            numfloors: {
                value: '',
                isValid: true,
                message: ''
            },
            direction: {
                value: '',
                isValid: true,
                message: ''
            },
            contactInfo: {
                value: '',
                isValid: true,
                message: ''
            },
            address: {
                value: '',
                isValid: true,
                message: ''
            },
            postDate: '',
            expiredDate: {
                value: '',
                isValid: true,
                message: ''
            },
            idUser: '',
            idProject: {
                value: '',
                isValid: true,
                message: ''
            }
        }
    }
    componentDidMount() {
        this.props.getPROs();
    }
    componentWillMount() {
        this.setState({
            idUser: this.props.idCurrentUser,
            postDate: this.format_currentDate()
        })
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var newState = {
            ...this.state,
            [name]: {
                ...this.state[name],
                value
            }
        }
        this.setState(newState)
    }
    clearForm() {
        this.setState({
            title: {
                value: '',
                isValid: true,
                message: ''
            },
            price: {
                value: '',
                isValid: true,
                message: ''
            },
            imageUrl: {
                value: '',
                isValid: true,
                message: ''
            },
            area: {
                value: '',
                isValid: true,
                message: ''
            },
            numbedrooms: {
                value: '',
                isValid: true,
                message: ''
            },
            numfloors: {
                value: '',
                isValid: true,
                message: ''
            },
            direction: {
                value: '',
                isValid: true,
                message: ''
            },
            contactInfo: {
                value: '',
                isValid: true,
                message: ''
            },
            address: {
                value: '',
                isValid: true,
                message: ''
            },
            expiredDate: {
                value: '',
                isValid: true,
                message: ''
            },
            idProject: {
                value: '',
                isValid: true,
                message: ''
            }
        })
    }

    format_currentDate = () => {
        var rawDay = new Date();
        var currentYear = rawDay.getFullYear();
        var currentMonth = rawDay.getMonth().toString().length === 1 ? `0${rawDay.getMonth() + 1}` : rawDay.getMonth() + 1;
        var currentDate = rawDay.getDate().toString().length === 1 ? `0${rawDay.getDate()}` : rawDay.getDate();
        var result = `${currentMonth}/${currentDate}/${currentYear}`
        return result
    }
    handleShow() {
        this.setState({
            title: {
                value: '',
                isValid: true,
                message: ''
            },
            price: {
                value: '',
                isValid: true,
                message: ''
            },
            imageUrl: {
                value: '',
                isValid: true,
                message: ''
            },
            area: {
                value: '',
                isValid: true,
                message: ''
            },
            numbedrooms: {
                value: '',
                isValid: true,
                message: ''
            },
            numfloors: {
                value: '',
                isValid: true,
                message: ''
            },
            direction: {
                value: '',
                isValid: true,
                message: ''
            },
            contactInfo: {
                value: '',
                isValid: true,
                message: ''
            },
            address: {
                value: '',
                isValid: true,
                message: ''
            },
            expiredDate: {
                value: '',
                isValid: true,
                message: ''
            },
            idProject: {
                value: '',
                isValid: true,
                message: ''
            }
        })
    }
    handleClose() {
        this.props.setCloseAddAdvertisement(false)
    }
    onSubmit() {
        var { title,
            price,
            imageUrl,
            area,
            numfloors,
            numbedrooms,
            direction,
            contactInfo,
            address,
            expiredDate,
            idProject
        } = this.state;
        var allADs = this.props.allAdvertisements;

        //Clear State
        this.setState({
            title: {
                value: this.state.title.value,
                isValid: true,
                message: ''
            },
            price: {
                value: this.state.price.value,
                isValid: true,
                message: ''
            },
            imageUrl: {
                value: this.state.imageUrl.value,
                isValid: true,
                message: ''
            },
            area: {
                value: this.state.area.value,
                isValid: true,
                message: ''
            },
            numbedrooms: {
                value: this.state.numbedrooms.value,
                isValid: true,
                message: ''
            },
            numfloors: {
                value: this.state.numfloors.value,
                isValid: true,
                message: ''
            },
            direction: {
                value: this.state.direction.value,
                isValid: true,
                message: ''
            },
            contactInfo: {
                value: this.state.contactInfo.value,
                isValid: true,
                message: ''
            },
            address: {
                value: this.state.address.value,
                isValid: true,
                message: ''
            },
            expiredDate: {
                value: this.state.expiredDate.value,
                isValid: true,
                message: ''
            },
            idProject: {
                value: this.state.idProject.value,
                isValid: true,
                message: ''
            }
        })

        //check title is avalable or not
        var availablProjectTitle = [];
        for (let index = 0; index < allADs.length; index++) {
            const ad = allADs[index];
            availablProjectTitle.push(ad.title)
        }

        //Validation for Title
        const checkTitle = (newTitle) => {
            var isAvailableAdvertisement = availablProjectTitle.includes(newTitle) ? true : false
            if (newTitle === '') {
                this.setState({
                    title: {
                        value: this.state.title.value,
                        isValid: false,
                        message: 'Title can not be blanked!!!!'
                    }
                })
            } else if (isAvailableAdvertisement) {
                this.setState({
                    title: {
                        value: this.state.title.value,
                        isValid: false,
                        message: 'Title is avalable!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckTitle = checkTitle(title.value)

        //Validation for price
        const checkPrice = (newPrice) => {
            if (newPrice === '') {
                this.setState({
                    price: {
                        value: this.state.price.value,
                        isValid: false,
                        message: 'Price can not be blanked!!!!'
                    }
                })
            } else if (Number(newPrice) <= 0) {
                this.setState({
                    price: {
                        value: this.state.price.value,
                        isValid: false,
                        message: 'Price can not be a negative number or zero !!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckPrice = checkPrice(price.value)

        //Validation for imageUrl
        const checkImageUrl = (newImageUrl) => {
            if (newImageUrl === '') {
                this.setState({
                    imageUrl: {
                        value: this.state.imageUrl.value,
                        isValid: false,
                        message: 'Image url can not be blanked !!!!'
                    }
                })
            } else if (!validator.isURL(newImageUrl)) {
                this.setState({
                    imageUrl: {
                        value: this.state.imageUrl.value,
                        isValid: false,
                        message: 'Image url has to be an url type !!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckImageUrl = checkImageUrl(imageUrl.value)

        //Validation for area
        const checkArea = (newArea) => {
            if (newArea === '') {
                this.setState({
                    area: {
                        value: this.state.area.value,
                        isValid: false,
                        message: 'Area can not be blanked!!!!'
                    }
                })
            } else if (Number(newArea) <= 0) {
                this.setState({
                    area: {
                        value: this.state.area.value,
                        isValid: false,
                        message: 'Area can not be a negative number or zero !!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckArea = checkArea(area.value)

        //Validation for numbedrooms
        const checkNumBedRoom = (newNumBedRoom) => {
            if (newNumBedRoom === '') {
                this.setState({
                    numbedrooms: {
                        value: this.state.numbedrooms.value,
                        isValid: false,
                        message: 'Number of Bed Rooms can not be blanked!!!!'
                    }
                })
            } else if (Number(newNumBedRoom) <= 0) {
                this.setState({
                    numbedrooms: {
                        value: this.state.numbedrooms.value,
                        isValid: false,
                        message: 'Number of Bed Rooms can not be a negative number or zero !!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckNumBedRoom = checkNumBedRoom(numbedrooms.value)

        //Validation for numfloors
        const checkNumFloor = (newNumFloor) => {
            if (newNumFloor === '') {
                this.setState({
                    numfloors: {
                        value: this.state.numfloors.value,
                        isValid: false,
                        message: 'Number of floors can not be blanked!!!!'
                    }
                })
            } else if (Number(newNumFloor) <= 0) {
                this.setState({
                    numfloors: {
                        value: this.state.numfloors.value,
                        isValid: false,
                        message: 'Number of floors can not be a negative number or zero !!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckNumFloor = checkNumFloor(numfloors.value)

        //Validation for direction
        const checkDirection = (newDirection) => {
            if (newDirection === '') {
                this.setState({
                    direction: {
                        value: this.state.direction.value,
                        isValid: false,
                        message: 'Direction can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckDirection = checkDirection(direction.value)

        //Validation for contactInfo
        const checkContactInfo = (newContactInfo) => {
            if (newContactInfo === '') {
                this.setState({
                    contactInfo: {
                        value: this.state.contactInfo.value,
                        isValid: false,
                        message: 'Contact information can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckContactInfo = checkContactInfo(contactInfo.value)

        //Validation for address
        const checkAddress = (newAddress) => {
            if (newAddress === '') {
                this.setState({
                    address: {
                        value: this.state.address.value,
                        isValid: false,
                        message: 'Owner can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckAddress = checkAddress(address.value)

        //Validation for expiredDate
        const checkExpireDate = (newExpireDate) => {
            if (newExpireDate === '') {
                this.setState({
                    expiredDate: {
                        value: this.state.expiredDate.value,
                        isValid: false,
                        message: 'Expired date can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckExpireDate = checkExpireDate(expiredDate.value)

        //Validation for idProject
        const checkIdProject = (newIdProject) => {
            if (newIdProject === '') {
                this.setState({
                    idProject: {
                        value: this.state.idProject.value,
                        isValid: false,
                        message: 'Project can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckIdProject = checkIdProject(idProject.value)

        if (resultCheckTitle
            && resultCheckPrice
            && resultCheckImageUrl
            && resultCheckArea
            && resultCheckNumFloor
            && resultCheckNumBedRoom
            && resultCheckDirection
            && resultCheckContactInfo
            && resultCheckAddress
            && resultCheckExpireDate
            && resultCheckIdProject
        ) {
            var newAD = {
                title: this.state.title.value,
                price: this.state.price.value,
                imageUrl: this.state.imageUrl.value,
                area: this.state.area.value,
                numbedrooms: this.state.numbedrooms.value,
                numfloors: this.state.numfloors.value,
                direction: this.state.direction.value,
                contactInfo: this.state.contactInfo.value,
                address: this.state.address.value,
                postDate: this.state.postDate,
                expiredDate: this.state.expiredDate.value,
                idUser: this.state.idUser,
                idProject: this.state.idProject.value
            }
            this.props.addNewAd(newAD)
            alert("Create Advertisement Successful!!!")
            this.props.setCloseAddAdvertisement(false)
        }

    }

    render() {
        var { pros } = this.props.projects;
        var listProjects = pros.map((project, index) => {
            return <option key={index} value={project._id}>{project.name}</option>
        })
        return (
            <Modal
                onEnter={this.handleShow.bind(this)}
                backdrop='static'
                show={this.props.showAddAdvertisement}
                onHide={this.handleClose.bind(this)}
            >
                <ModalHeader>
                    <ModalTitle bsClass="text-center">
                        Create Advertisement
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form horizontal>
                        {/* Title */}
                        <FormGroup
                            id="title"
                            validationState={this.state.title.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Title</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.title.value}
                                    name="title"
                                    placeholder='Title'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.title.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.title.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* price */}
                        <FormGroup
                            id="price"
                            validationState={this.state.price.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Price</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="number"
                                    value={this.state.price.value}
                                    name="price"
                                    placeholder='price'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.price.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.price.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* imageUrl */}
                        <FormGroup
                            id="imageUrl"
                            validationState={this.state.imageUrl.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Image Url</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.imageUrl.value}
                                    name="imageUrl"
                                    placeholder='Image Url'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.imageUrl.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.imageUrl.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* Area */}
                        <FormGroup
                            id="area"
                            validationState={this.state.area.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Area</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="number"
                                    value={this.state.area.value}
                                    name="area"
                                    placeholder='Area'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.area.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.area.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* numbedrooms */}
                        <FormGroup
                            id="numbedrooms"
                            validationState={this.state.numbedrooms.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>BedRooms</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="number"
                                    value={this.state.numbedrooms.value}
                                    name="numbedrooms"
                                    placeholder='Number of bedrooms'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.numbedrooms.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.numbedrooms.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* numfloors */}
                        <FormGroup
                            id="numfloors"
                            validationState={this.state.numfloors.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Floors</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="number"
                                    value={this.state.numfloors.value}
                                    name="numfloors"
                                    placeholder='Number of floors'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.numfloors.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.numfloors.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* direction */}
                        <FormGroup
                            id="direction"
                            validationState={this.state.direction.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Direction</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.direction.value}
                                    name="direction"
                                    placeholder='Direction'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.direction.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.direction.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* contactInfo */}
                        <FormGroup
                            id="contactInfo"
                            validationState={this.state.contactInfo.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Contact Information</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.contactInfo.value}
                                    name="contactInfo"
                                    placeholder='Contact Information'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.contactInfo.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.contactInfo.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* address */}
                        <FormGroup
                            id="address"
                            validationState={this.state.address.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Address</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.address.value}
                                    name="address"
                                    placeholder='Address'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.address.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.address.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* postDate */}
                        <FormGroup
                            id="postDate"
                            validationState={null}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Post Date</Col>
                            <Col sm={5}>
                                <FormControl
                                    disabled
                                    type="input"
                                    value={this.state.postDate}
                                    name="postDate"
                                    placeholder='Post Date'
                                />
                            </Col>
                        </FormGroup>

                        {/* expiredDate */}
                        <FormGroup
                            id="expiredDate"
                            validationState={this.state.expiredDate.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Expired Date</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="date"
                                    value={this.state.expiredDate.value}
                                    name="expiredDate"
                                    placeholder='Expired Date'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.expiredDate.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.expiredDate.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* Project */}
                        <FormGroup
                            id="idProject"
                            validationState={this.state.idProject.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Project</Col>
                            <Col sm={5}>
                                <FormControl
                                    componentClass='select'
                                    value={this.state.idProject.value}
                                    name="idProject"
                                    placeholder='select'
                                    onChange={this.onChange.bind(this)}
                                >
                                    <option value="" disabled className="text-hide">Please select</option>
                                    {listProjects}
                                </FormControl>
                                <FormControl.Feedback />
                                {this.state.idProject.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.idProject.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <div className="text-center">
                        <Button
                            bsStyle="success"
                            onClick={this.onSubmit.bind(this)}
                        >Create</Button>
                        <Button
                            bsStyle="danger"
                            onClick={this.handleClose.bind(this)}
                        >Close</Button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.pros
    }
}
export default connect(mapStateToProps, { getPROs })(AddAdvertisement);